import { api } from "../../lib/config";
import type { LoginInput, Member, MemberInput, MemberUpdateInput } from "../../lib/types/member";

class MemberService {
  public async getTopUsers(): Promise<Member[]> {
    try {
      const result = await api.get<Member[]>("/member/top-users");
      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers:", err);
      throw err;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const result = await api.post<{ member: Member; accessToken: string }>("/member/signup", input);
      const member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const result = await api.post<{ member: Member; accessToken: string }>("/member/login", input);
      const member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, login:", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      await api.post("/member/logout");
      localStorage.removeItem("memberData");
    } catch (err) {
      console.log("Error, logout:", err);
      throw err;
    }
  }

  public async getMemberDetail(): Promise<Member> {
    try {
      const result = await api.get<Member>("/member/detail");
      return result.data;
    } catch (err) {
      console.log("Error, getMemberDetail:", err);
      throw err;
    }
  }

  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();
      if (input.memberNick) formData.append("memberNick", input.memberNick);
      if (input.memberPhone) formData.append("memberPhone", input.memberPhone);
      if (input.memberPassword) formData.append("memberPassword", input.memberPassword);
      if (input.memberAddress) formData.append("memberAddress", input.memberAddress);
      if (input.memberDesc) formData.append("memberDesc", input.memberDesc);
      if (input.memberImage) formData.append("memberImage", input.memberImage);

      const result = await api.post<Member>("/member/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const member = result.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, updateMember:", err);
      throw err;
    }
  }
}

export default MemberService;
