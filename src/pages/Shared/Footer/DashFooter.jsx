import moment from "moment";

const DashFooter = () => {
  const currentYear = moment().format("YYYY");
  return (
    <>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © {currentYear} - All right reserved by ACraft</p>
        </div>
      </footer>
    </>
  );
};

export default DashFooter;
