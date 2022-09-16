import Button from "../components/Button";
import Form from "../components/Form";
import { PersonCircleOutline } from "react-ionicons";
import { Key } from "react-ionicons";
import FingerprintReader from "../components/FingerprintReader";

const Login = () => {
  return (
    <>
      <h2 className="font-bold text-4xl ml-6 mb-[112px]">Log In</h2>
      <Form css={"pl-3 pr-3"}>
        <label className="grid w-11/12 mx-auto mb-6">
          <h4 className="font-bold text-[15px] mb-3 dark:text-white">
            Username
          </h4>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-11/12 border-b-4 border-additional row-start-2 row-end-3 col-start-1 col-end-2 leading-10"
          ></input>
          <PersonCircleOutline
            color={"#00000"}
            height="21px"
            width="21px"
            className={
              "row-start-2 row-end-3 col-start-1 col-end-2 justify-self-end mr-8 mt-3"
            }
          />
        </label>
        <label className="grid w-11/12 mx-auto">
          <h4 className="font-bold text-[15px] mb-3 dark:text-white">
            Password
          </h4>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-11/12 border-b-4 border-additional row-start-2 row-end-3 col-start-1 col-end-2 leading-10"
          ></input>
          <Key
            color={"#00000"}
            height="21px"
            width="21px"
            className={
              "row-start-2 row-end-3 col-start-1 col-end-2 justify-self-end mr-8 mt-3"
            }
          />
        </label>
        <Button css="w-11/12 border-solid border-4 rounded-full border-additional text-black mt-8 dark:border-white dark:text-white">
          <p className="mt-4 mb-4 tracking-widest font-bold uppercase">
            Log in
          </p>
        </Button>
      </Form>
      <FingerprintReader></FingerprintReader>
    </>
  );
};

export default Login;
