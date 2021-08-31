import headerLogo from "./../JAInspiringHeader.png";

const CompletionPage = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img src={headerLogo} alt="Girl in a jacket" width="100%"></img>
      <h2
        style={{
          textAlign: "center",
          background: "#d59844",
          padding: "20px",
          marginTop: "0",
        }}
      >
        Thank you for participating in our BizTown program!
      </h2>
    </div>
  );
};

export default CompletionPage;
