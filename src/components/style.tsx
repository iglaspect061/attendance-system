const containerStyles = {
    width: "90%", 
    margin: "20px auto", 
    padding: "1.5rem", 
    fontSize: "1rem", 
    backgroundColor: "#ffffff",
    borderRadius: "15px", 
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)", 
    border: "1px solid #e0e0e0", 
    textAlign: "center",
    color: "#333", 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
    transition: "transform 0.3s, box-shadow 0.3s", 
  };
  const containerHoverStyles = {
    transform: "scale(1.02)", 
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)", 
  };
  
  
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px", 
    padding: "1.5rem",
    backgroundColor: "linear-gradient(135deg, #ffffff, #e3f2fd)", 
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", 
    borderRadius: "1rem", 
  };
  
  const labelStyles = {
    display: "block",
    marginBottom: "0.75rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
    fontSize: "0.9rem", 
  };
  
  const inputStyles = {
    display: "block",
    width: "85%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #b0bec5",
    backgroundColor: "#ffffff",
    boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.5rem", 
    marginBottom: "1rem", 
    transition: "border-color 0.3s ease, box-shadow 0.3s ease", 
  };
  
  const buttonStyles = {
    marginTop: "1rem",
    display: "block",
    width: "85%", 
    padding: "0.75rem",
    fontSize: "1rem",
    border: "none",
    backgroundColor: "#007bff", 
    color: "#ffffff",
    cursor: "pointer",
    borderRadius: "0.5rem",
    transition: "background-color 0.3s ease, transform 0.2s ease", 
  };
  
  export { formStyles, labelStyles, inputStyles, buttonStyles, containerStyles,containerHoverStyles };
  