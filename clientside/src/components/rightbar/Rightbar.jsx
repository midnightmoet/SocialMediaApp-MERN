import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
	const PF = process.env.REACT_APP_PF;
	
	const HomeRightbar = () => {
		return (
			<div>
				<div className="birthdayContainer">
					<img className="birthdayImg" src={`${PF}gift.png`} alt="" />
					<span className="birthdayText">
						<b>Rikki Champagne</b> and <b>3 other friends</b> have a
						birhday today.
					</span>
				</div>
				<img className="rightbarAd" src={`${PF}ad.png`} alt="" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</div>
		);
	};

	const ProfileRightbar = () => {
		return (
			<div>
				<h4 className="rightbarTitle">User Information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoItemTitle">City:</span>
						<span className="rightbarInfoItemValue">Dallas</span>
						<span className="rightbarInfoItemTitle">From:</span>
						<span className="rightbarInfoItemValue">Detroit</span>
						<span className="rightbarInfoItemTitle">
							Relationship:
						</span>
						<span className="rightbarInfoItemValue">Married</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/1.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Rikki Champagne
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/8.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Jenna Lynn
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/2.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Nisa Kirk</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/3.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Kody Champagne
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/4.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Denise Konja
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/5.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Lynn Sparks
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/6.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Lily Beth</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={`${PF}person/7.jpeg`}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Travis Scott
						</span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
}
