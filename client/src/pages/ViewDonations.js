import Axios from "axios";
import React from "react";

const ViewDonations = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/donations";

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => {
      console.log(res.data);
      setDonations(res.data);
    });
  }, []);

  if (donations.length < 1) {
    return <h2>No Donations found!</h2>;
  }

  return (
    <div className="flex flex-col gap-4 justify-center mt-8 items-center">
      <h2 className="font-bold text-2xl">Donations</h2>
      {donations.map((donation, index) => (
        <div
          className="bg-[#579506] w-[70vw] p-4 rounded-md text-white"
          key={index}
        >
          <p>
            Name:
            <b className="ml-1">{donation.name}</b>
          </p>
          <p>
            Email:<b className="ml-1"> {donation.email}</b>
          </p>
          <p>
            Donated Amount: <b className="ml-1">{donation.amount}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ViewDonations;
