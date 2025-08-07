import { useEffect, useRef, useState } from "react";
import MenuSection from "../../components/profile/MenuSection";
import ProfileHeader from "../../components/profile/ProfileHeader";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/shared/ModalContent";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";

export default function Profile() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const logoutModalRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (showLogoutModal && logoutModalRef.current) {
      logoutModalRef.current.open();
    } else if (logoutModalRef.current) {
      logoutModalRef.current.close();
    }
  }, [showLogoutModal, logoutModalRef]);
  const handleShowLogout = () => {
    setShowLogoutModal(true);
  };
  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };
  const handleLogout = () => {
    setShowLogoutModal(false);
    // Add your logout logic here, e.g., clearing user data, redirecting to login page, etc.
    navigate("/login");
  };
  return (
    <>
      {showLogoutModal && (
        <Modal ref={logoutModalRef} onClose={handleCloseModal}>
          <ModalContent
            title="Logout"
            description="Are you sure you want to log out?"
            acceptTitle="Yes, Logout"
            handleCloseModal={handleCloseModal}
            handleAction={handleLogout}
          />
        </Modal>
      )}
      <Header />
      <div className="mx-3 gap-7 flex flex-col">
        <ProfileHeader />
        <div className="flex h-[calc(100dvh-205px)] md:h-auto overflow-y-auto">
          <MenuSection onLogout={handleShowLogout} />
        </div>
      </div>
    </>
  );
}
