import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "timeago.js";

export default function Post({ post }) {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const PF = process.env.REACT_APP_PF;

	useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);
        };
       fetchUser();
	   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post.userId]);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src={user.profilePicture  || PF+"person/noAvatar.jpg"}
							alt=""
						/>
						<span className="postUsername">
							{user.username}
						</span>
						<span className="postDate">{format(post.createdAt)}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postCenterText">{post?.desc}</span>
					<img
						className="postCenterImg"
						src={PF+post.img}
						alt=""
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src={`${PF}like.png`}
							onClick={likeHandler}
							alt=""
						/>
						<img
							className="likeIcon"
							src={`${PF}heart.png`}
							onClick={likeHandler}
							alt=""
						/>
						<span className="postLikeCounter">
							{like} people like it
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">
							{post.comment} comments
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}