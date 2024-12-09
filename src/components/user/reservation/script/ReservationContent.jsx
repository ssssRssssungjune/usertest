import { Outlet , useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { customFetch } from "../../../../util/customFetch";
//24.11.25 지은 [완료] : ReservationContent 테스트.
export default function ReservationContent() {
  const [loadContentComplete,setLoadComplete] = useState(false);

  // public class CountTypeDto {
  //   private Integer roomTypeId;
  //   private String name;
  //   private String description;
  //   private Integer baseOccupancy;
  //   private Integer maxOccupancy;
  //   private BigDecimal basePrice;
  //   private Integer roomCount;
  // }
  const [roomData, setRoomData] = useState([
    {
        roomTypeId : 0,
        name : "",
        description : "",
        baseOccupancy : 0,
        maxOccupancy : 0,
        basePrice : 0,
        roomCount : 0
    },
  ]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await customFetch("http://localhost:8080/api/admin/rooms/types/count");
      if (res !== null){
        setRoomData(res);
        setLoadComplete(true);
      }
    };
    setLoadComplete(false);
    fetchData();
  },[])

  return (
    <div className="container text-bg-light p-5">
    {
      loadContentComplete && 
          <Outlet 
            context={{
              roomTypeDataList: roomData
            }} 
          />
    }
    </div>
  );
}

