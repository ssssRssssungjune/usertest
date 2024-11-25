import ButtonEx from "./ButtonEx";

//24.11.12 지은 [완료] : ButteonEx 적용 테스트.
export default function Header() {
  return (
    <div>
      <ButtonEx id={"home"} url={"/"}>
        <p>로고(홈)</p>
      </ButtonEx>
      <ButtonEx id={"about"} url={"/about"}>
        <p>About</p>
      </ButtonEx>
      <ButtonEx id={"room"} url={"/room"}>
        <p>Room View</p>
      </ButtonEx>
      <ButtonEx id={"special"} url={"/special"}>
        <p>Special</p>
      </ButtonEx>
      <ButtonEx id={"reservation"} url={"/reservation"}>
        <p>Reservation</p>
      </ButtonEx>
      <ButtonEx id={"community"} url={"/community"}>
        <p>Community</p>
      </ButtonEx>
      <ButtonEx id={"user"} url={"/user"}>
        <p>User</p>
      </ButtonEx>
    </div>
  );
}
