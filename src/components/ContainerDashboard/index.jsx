import { MainContainer } from "./style";

const ContainerDashboard = () => {
  return (
    <MainContainer>
      <div className="div-picture">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFWyDxiVdcSeQ/profile-displayphoto-shrink_200_200/0/1658196039633?e=1678924800&v=beta&t=F-qKzEkH_pzxyewoD-36m82uRJsncSOmGM8qNfNL-Ck"
          alt=""
          className="profile-picture"
        />
        {window.screen.width < 900 ? (
          <h1 className="profile-text">My name is Axel, I'm web developer!</h1>
        ) : (
          <h1 className="profile-text">
            My name is Axel, I'm web developer and I create{" "}
            <span>responsive</span> sites with <span>beautiful</span> design and{" "}
            <span>CRUD API</span> in React.js and Node.js
          </h1>
        )}
      </div>
    </MainContainer>
  );
};
export default ContainerDashboard;
