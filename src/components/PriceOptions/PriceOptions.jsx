import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = 
    [
        {
          "id": 1,
          "name": "Standard Membership",
          "price": 50,
          "features": [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 80,
          "features": [
            "Access to all facilities",
            "Access to group fitness classes",
            "Access to sauna and steam room",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 120,
          "features": [
            "Access for 2 adults and 2 children",
            "Access to all facilities",
            "Access to group fitness classes",
            "Locker room access"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": 30,
          "features": [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access",
            "Valid student ID required"
          ]
        },
        {
          "id": 5,
          "name": "Senior Membership",
          "price": 40,
          "features": [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access",
            "Age 60+ required"
          ]
        }
      ]
      
    
    return (
        
        <div className="grid md:grid-cols-3 mt-8 gap-6">
            
            {
                priceOptions.map(option =><PriceOption key={option.key} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;