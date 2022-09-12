<template >
    <div class="navbar" style="padding-top: 12px">
        <div class="navbar__item" v-for="menuItem in listMenu" :key="menuItem.id">
            <div class="navbar__icon m-icon-24" :class="menuItem.icon"></div>
            <div class="navbar__text">{{menuItem.menu}}</div>
        </div>
        <!-- <div class="navbar__item item-pesudo item-active">
            <div class="navbar__icon m-icon-24 m__icon-cash item-selected"></div>
            <div class="navbar__text">Tiền mặt</div>
        </div>

    
        <div class="navbar__item">
            <div class="navbar__icon m-icon-24 m__icon-defaultassets"></div>
            <div class="navbar__text">Tài sản cố định</div>
        </div>
        <div class="navbar__item">
            <div class="navbar__icon m-icon-24 m__icon-salary"></div>
            <div class="navbar__text">Tiền lương</div>
        </div>
        <div class="navbar__item">
            <div class="navbar__icon m-icon-24 m__icon-tax"></div>
            <div class="navbar__text">Thuế</div>
        </div> -->
    </div>
</template>
<script>
export default {
    name: "TheMenu",
    data() {
        return {
            listMenu : [
                {
                    id: 1,
                    menu: "Tổng quan",
                    icon: "m__icon-dashboard"
                },
                {
                    id: 2,
                    menu: "Tiền mặt",
                    icon: "m__icon-cash"
                },
                {
                    id: 3,
                    menu: "Tiền gửi",
                    icon: "m__icon-deposit"
                },
                {
                    id: 4,
                    menu: "Mua hàng",
                    icon: "m__icon-buy"
                },
                {
                    id: 5,
                    menu: "Bán hàng",
                    icon: "m__icon-sell"
                },
                {
                    id: 6,
                    menu: "Kho",
                    icon: "m__icon-warehouse"
                },
                {
                    id: 7,
                    menu: "Quản lý hóa đơn",
                    icon: "m__icon-bill"
                },
                {
                    id: 8,
                    menu: "Công cụ dụng cụ",
                    icon: "m__icon-tool"
                },
                {
                    id: 9,
                    menu: "Tài sản cố định",
                    icon: "m__icon-defaultassets"
                },
                {
                    id: 10,
                    menu: "Lương",
                    icon: "m__icon-salary"
                },
                {
                    id: 11,
                    menu: "Thuế",
                    icon: "m__icon-tax"
                },
            ]
        }
    },
};
</script>
<style >
    @import url("../../css/layout/navbar.css");
</style>