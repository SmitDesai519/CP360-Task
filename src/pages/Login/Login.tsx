import React, { useState, FC } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import isEmail from "validator/lib/isEmail";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

type FormData = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState<boolean>(false);
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });

  const additionOfPassword = (value: string) => {
    const total = +value?.split("")?.reduce((acc, a) => acc + Number(a), 0);
    return total;
  };

  const onChangeData = (name: string, value: string) => {
    const userData: any = { ...data };
    userData[name] = value;
    setData(userData);
  };

  const Validate = () => {
    if (data?.email === "" || !isEmail(data?.email)) {
      return false;
    }
    if (data?.password === null || additionOfPassword(data?.password) !== 10) {
      return false;
    }
    return true;
  };

  const onLogin = () => {
    !submit && setSubmit(true);
    const isValid = Validate();
    if (isValid) navigate("/home");
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.loginTitle}>Login</div>
        <div className="grid p-fluid">
          <div className="col-12 md:col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                name="email"
                value={data?.email}
                placeholder="Email"
                onChange={(e) => onChangeData(e.target.name, e.target.value)}
              />
            </div>
            {(data?.email === "" || !isEmail(data?.email)) && submit && (
              <div className={styles.error}>Please Enter Valid Email</div>
            )}
          </div>
          <div className="col-12 md:col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <Password
                name="password"
                placeholder="Password"
                value={data?.password}
                feedback={false}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => onChangeData(e.target.name, e.target.value)}
              />
            </div>
            {(data?.password === null ||
              additionOfPassword(data?.password) !== 10) &&
              submit && (
                <div className={styles.error}>
                  The password must be numeric, and the result must be 10 when
                  each numeric character is added
                </div>
              )}
          </div>
          <div className={`col-12 md:col-12 ${styles.loginButton}`}>
            <Button
              label="Submit"
              className="p-button-success"
              style={{ width: "200px" }}
              onClick={() => onLogin()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
