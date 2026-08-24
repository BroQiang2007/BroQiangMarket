// 等待整个网页元素加载完毕后再激活按钮，防止报错
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('checkout-btn');

    if (btn) {
        btn.addEventListener('click', () => {
            console.log("按钮被成功点击了！准备跳转...");
            
            // 改变按钮状态，防止用户重复点击
            btn.innerText = "正在跳转支付...";
            btn.disabled = true;

            // 这是你提供的真实测试链接
            const paymentLink = "https://buy.stripe.com/test_6oUdR27x20ANfbg5T98Vi01"; 
            
            // 让浏览器跳转到该链接
            window.location.href = paymentLink;
        });
    } else {
        console.error("找不到 ID 为 checkout-btn 的按钮，请检查 HTML！");
    }
});
