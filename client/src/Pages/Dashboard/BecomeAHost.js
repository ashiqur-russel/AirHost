import React from "react";
import { getImageUrl } from "../../api/imageUpload";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";

const BecomeAHost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image).then((data) => {
      console.log(data);
    });
  };

  return (
    <>
      <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>
    </>
  );
};

export default BecomeAHost;
