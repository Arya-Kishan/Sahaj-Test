const FormateDate = (date) => {

  // Check if  date is provided; if not, use today's date
  const validDate = date ? new Date(date) : new Date();

  return validDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default FormateDate;