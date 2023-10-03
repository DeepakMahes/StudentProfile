import Profile from "../Profile";
import Student from "../Student";

export default function Home() {
  return (
    <div className="d-flex">
      <Student></Student>
      <Profile></Profile>
    </div>
  );
}
