$(function(){
    $("#close_banner").click(function(){
        $("#banner").addClass("d-none");
     })

     $("#cart").click(function(){
        var order = {
            buyItem:"라움 그릇 6p",
            buyCount: 1,
            buyPrice: 10000
        }
        //.prompt() : 사용자에게 입력창을 띄우는 내장객체 메소드 (오래된메소드) -> 지금은 form을 쓴다.
        var userChoice=confirm("장바구니에 담았습니다, 결제창으로 이동하시겠습니까?");
        //.confirm() : 확인 true, 취소 false로 의사선택창을 띄움
        userChoice ? location.href="/payment" : null;
                        //라우팅 : 서버가 클라이언트에게 요청하는 결과를 주는 과정

     })


})