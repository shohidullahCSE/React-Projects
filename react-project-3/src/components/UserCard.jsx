import '../assets/css/userCard.css'
function UserCard({user}) {
  return (
    
<div className="card">
  <div className="container">
    <h4><b>{user.name}</b></h4>
    <p>{user.age}</p>
    <p>{user.location}</p>
  </div>
</div>

  );
}

export default UserCard;