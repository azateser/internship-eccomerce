import React from "react";
import Layout from "../../components/layout";
import ProfileLayout from "../../components/profile";
import { useAppDispatch, useAppSelector } from "../../services";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { updateUser } from "../../services/authSlice/api";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [mode, setMode] = React.useState<"view" | "edit">("view");

  const [userName, setUserName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [password, setPassword] = React.useState(user.password);
  const [role, setRole] = React.useState(user.role);

  const handleSave = () => {
    const userData = {
      id: user.id,
      avatar: user.avatar,
      name: userName,
      email,
      password,
      role,
    };
    dispatch(
      updateUser({
        id: user.id,
        user: userData,
      })
    );
    setMode("view");
  };

  return (
    <Layout>
      <div className="favorites">
        <div className="flex items-center justify-between mb-12">
          <h1>Profile Information</h1>
        </div>

        <ProfileLayout>
          <div className="gap-4 ml-12">
            <div className="flex justify-between w-full">
              <div>
                {" "}
                <img
                  className="w-16 h-16 rounded-full"
                  src={user.avatar}
                  alt=""
                />
              </div>
              <div>
                {mode === "view" ? (
                  <Button onClick={() => setMode("edit")}>Edit Profile</Button>
                ) : (
                  <div className="flex gap-4">
                    <Button onClick={() => setMode("view")}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-8">
              {mode === "edit" ? (
                <Input
                  label="Full Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              ) : (
                <Input label="Full Name" value={user.name} borderNone />
              )}
              {mode === "edit" ? (
                <Input
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <Input label="Email" value={user.email} borderNone />
              )}
            </div>
            <div className="grid grid-cols-2 gap-12 mt-8">
              {mode === "edit" ? (
                <Input
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                <Input label="Password" value={user.password} borderNone />
              )}
              <Input disabel label="Role" value={user.role} borderNone />
            </div>
          </div>
        </ProfileLayout>
      </div>
    </Layout>
  );
};

export default ProfilePage;
