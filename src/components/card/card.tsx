import projectimage from "../../assets/project1..png";

function Card() {
  return (
    <div>
      <img src={projectimage} alt="project image" />
      <div>
        <h2>ecomerce website</h2>
        <p>
          {
            "this is my first real world project using mernstack and i sucessfully conterbuted to on both front end and the backend"
          }
        </p>
        <h3> #react js #node js #mongodb tailwind-css </h3>

        <div></div>
      </div>
    </div>
  );
}

export default Card;
