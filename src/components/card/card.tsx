import projectimage from "../../assets/project1..png";

function Card() {
  //for div containg image
  //border
  //border radius
  //box shadow
  //max width
  //display
  //for image element
  //max-width
  //height auto
  //border radious 50%
  return (
    <div className="w-96 border-2 border-white-600">
      <img className="w-full h-60 " src={projectimage} alt="project image" />
      <div>
        <div>
          <h2>ecomerce website</h2>
          <div class="text-md  flex flex-row">
            <a
              href="https://finovo.vernu.dev"
              rel="noopener noreferrer"
              class="px-1 underline hover:text-cyan-500"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/vernu/finovo"
              rel="noopener noreferrer"
              class="px-1 underline hover:text-cyan-500"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
              </svg>
            </a>
          </div>
          <p>
            {
              "this is my first real world project using mernstack and i sucessfully conterbuted to on both front end and the backend"
            }
          </p>
        </div>
        <h3> #react js #node js #mongodb tailwind-css </h3>
      </div>
    </div>
  );
}

export default Card;
