import Button from "../components/Button";
import Form from "../components/Form";
import { PersonCircleOutline } from "react-ionicons";
import { Key } from "react-ionicons";

const Login = () => {
  return (
    <Form css={"pl-3 pr-3"}>
      <label className="grid w-11/12">
        <h4 className="dark:text-white">Username</h4>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-11/12 border-b-4 border-additional row-start-2 row-end-3 col-start-1 col-end-2"
        ></input>
        <PersonCircleOutline
          color={"#00000"}
          height="21px"
          width="21px"
          className={
            "row-start-2 row-end-3 col-start-1 col-end-2 justify-self-end mr-8"
          }
        />
      </label>
      <label className="grid w-11/12">
        <h4>Password</h4>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-11/12 border-b-4 border-additional row-start-2 row-end-3 col-start-1 col-end-2"
        ></input>
        <Key
          color={"#00000"}
          height="21px"
          width="21px"
          className={
            "row-start-2 row-end-3 col-start-1 col-end-2 justify-self-end mr-8"
          }
        />
      </label>
      <Button css="w-11/12 border-solid border-4 rounded-full border-additional text-black mt-8 dark:border-white dark:text-white">
        Log in
      </Button>
    </Form>
  );
};

export default Login;
