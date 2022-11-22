import React, { useContext } from "react";
import { getImageUrl } from "../../api/imageUpload";
import { hostRequest } from "../../api/user";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { AuthContext } from "../../contexts/AuthProvider";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        documentImg: data,
        email: user?.email,
        role: "requested",
      };
      console.log(hostData);

      hostRequest(hostData).then((data) => console.log(data));
    });
  };

  return (
    <>
      <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>
    </>
  );
};

export default BecomeAHost;
