import React, { useContext, useEffect, useState } from "react";
import { getImageUrl } from "../../api/imageUpload";
import { getRole, hostRequest } from "../../api/user";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { AuthContext } from "../../contexts/AuthProvider";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data.role);
      setLoading(false);
    });
  }, [user]);

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

      hostRequest(hostData).then((data) => {});
    });
  };

  return (
    <>
      {role ? (
        <div className="h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
          Request Sent, wait for admin approval
        </div>
      ) : (
        <>
          {!loading && (
            <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>
          )}
        </>
      )}
    </>
  );
};

export default BecomeAHost;
