const Paymentmethods = () => {
  const images=[
    {name:"https://cdn.esewa.com.np/ui/images/esewa_og.png?111"},
    {name:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Khalti_Digital_Wallet_Logo.png.jpg"},
    {name:"https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"},
  ]
  return (
   
    <div className="px-52">
      <p className=" capitalize text-sm md:text-base lg:text-base xl:text-base font-normal">Selecet payment
      </p>
      <div className="grid grid-cols-3">
        {images.map((val,i)=>{
          return <div key={i} className="w-full h-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url (${val.name})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              jakjak
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Paymentmethods;
