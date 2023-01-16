import { Box } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

interface IUSERPROFILE {
  userID: string;
}

const UserProfileCmp: React.FC<IUSERPROFILE> = ({ userID }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <>
      (user && (<Box></Box>
      ))
    </>
  );
};

export default UserProfileCmp;
