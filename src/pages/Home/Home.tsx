import React, { FC, useState } from "react";
import { SelectInput } from "../../shared/SelectInput";
import styles from "./styles.module.scss";

export const Home: FC = () => {
  const colors = ["red", "yellow", "green", "blue"];
  const options = [
    { title: "React", id: "react" },
    { title: "Angular", id: "angular" },
    { title: "Vue", id: "vue" },
    { title: "Ember", id: "ember" },
  ];
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");

  console.log(selectedValue1, selectedValue2, selectedValue3, selectedValue4);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.homeTitle}>Home</div>
        <div className="grid p-fluid">
          <div className={styles.inputlabel}>select</div>
          <div className="col-12 md:col-12">
            <SelectInput
              options={options}
              optionLabel="title"
              placeholder="Select Technology"
              selectedValue={selectedValue1}
              setSelectedValue={(value) => setSelectedValue1(value)}
              searchable={false}
              multiselect={false}
            />
          </div>
        </div>
        <div className="grid p-fluid">
          <div className={styles.inputlabel}>Select & searchable</div>
          <div className="col-12 md:col-12">
            <SelectInput
              options={colors}
              placeholder="Select Colors"
              selectedValue={selectedValue2}
              setSelectedValue={(value) => setSelectedValue2(value)}
              searchable={true}
              multiselect={false}
            />
          </div>
        </div>
        <div className="grid p-fluid">
          <div className={styles.inputlabel}>Multi Select</div>
          <div className="col-12 md:col-12">
            <SelectInput
              options={colors}
              placeholder="Select Colors"
              selectedValue={selectedValue3}
              setSelectedValue={(value) => setSelectedValue3(value)}
              searchable={false}
              multiselect={true}
            />
          </div>
        </div>
        <div className="grid p-fluid">
          <div className={styles.inputlabel}>Multi Select & searchable</div>
          <div className="col-12 md:col-12">
            <SelectInput
              options={options}
              optionLabel="title"
              placeholder="Select Technology"
              selectedValue={selectedValue4}
              setSelectedValue={(value) => setSelectedValue4(value)}
              searchable={true}
              multiselect={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
