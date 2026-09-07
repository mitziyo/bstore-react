import { serverApi } from "../../../lib/config";
import type { Member } from "../../../lib/types/member";

const FALLBACK_AVATAR = "/img/home-two/author1.jpg";

export function BestSelling({ topUsers }: { topUsers: Member[] }) {
  return (
    <section className="best_selling_pr_area_two" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title text-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="title">Top Users</h2>
        </div>
        {topUsers.length === 0 ? (
          <p className="text-center">No active users yet.</p>
        ) : (
          <div className="row">
            {topUsers.map((member) => {
              const avatar = member.memberImage ? `${serverApi}/${member.memberImage}` : FALLBACK_AVATAR;
              return (
                <div className="col-lg-3 col-md-6" key={member._id}>
                  <div className="top-reader-card">
                    <img className="top-reader-card__photo" src={avatar} alt={member.memberNick} />
                    <h5 className="top-reader-card__name">{member.memberNick}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
