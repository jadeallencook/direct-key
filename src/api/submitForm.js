const submitForm = async ({
  Name = 'N/A',
  Title = 'N/A',
  Email = 'N/A',
  phone = 5555555555,
  hotel = 'N/A',
  property = 'N/A',
  location = 'N/A',
  number_of_rooms = 0,
  existing_customer = 0,
  contact_me = 0,
  subscribe = 0,
}) => {
  const data = fetch('http://directkey.onity.com/handler.php', {
    method: 'POST',
    body: JSON.stringify({
      Name,
      Title,
      Email,
      phone,
      hotel,
      property,
      location,
      number_of_rooms,
      existing_customer,
      contact_me,
      subscribe,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return data;
};

export default submitForm;
