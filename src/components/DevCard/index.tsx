import { MdLocationOn } from "react-icons/md"
import { FaTwitter, FaBuilding } from "react-icons/fa"
import { FiLink } from "react-icons/fi"
import { Container, ContainerUser } from "./styles";

type User = {
  name: string;
  username: string;
  avatar_url: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
}

type AccountInformations = {
  html_url: string;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface DevCardProps {
  user?: User;
  account?: AccountInformations;
}

export function DevCard({ user, account }: DevCardProps) {
  return (
    <Container>
      {
        user && account ?
        <ContainerUser>
          <div className="boxImage">
            <img src={user.avatar_url} alt="avatar"/>
          </div>
          <div className="boxContent">
            <div className="nameAndCreatedAt">
              <h1>{user.name}</h1>
              <time>Joined {account.created_at}</time>
              <img className="mobileAvatar" src={user.avatar_url} alt="avatar" />
            </div>
            <a className="username" href={account.html_url} target="_blank">@{user.username}</a>
            <p>{user.bio !== null ? user.bio : "This profile has no bio"}</p>
            <div className="accountInfos">
              <div>
                <h3>Repos</h3>
                <span>{account.public_repos}</span>
              </div>
              <div>
                <h3>Followers</h3>
                <span>{account.followers}</span>
              </div>
              <div>
                <h3>Following</h3>
                <span>{account.following}</span>
              </div>
            </div>
            <div className="userInfos">
              <div>
                <MdLocationOn />
                <h4>{user.location}</h4>
              </div>
              <div>
                <FaTwitter />
                <h4 className={`${user.twitter_username === null && "notAvailable"}`}>
                  {user.twitter_username !== null ? user.twitter_username : "Not Available"}
                </h4>
              </div>
              <div className="divBlog">
                <FiLink />
                <h4 className={`${user.blog === "" && "notAvailable"}`}>
                  {user.blog !== "" ? user.blog : "Not available"}
                </h4>
              </div>
              <div>
                <FaBuilding />
                <h4 className={`${user.company === null && "notAvailable"}`}>
                  {user.company !== null ? user.company : "Not Available"}
                </h4>
              </div>
            </div>
          </div>
        </ContainerUser>
        :  
        <div className="withoutUser">
          <h1>Search for devs on the search box 🚀</h1>
        </div>
      }
    </Container>
  )
}