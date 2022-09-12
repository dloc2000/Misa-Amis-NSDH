<template>
    <div class="content">
        <div class="main__page">
            <div class="page__header">
                <div class="page__header-title">Nhân viên</div>
                <button id="btnAdd" class="page__header--button button1" @click="btnOnClickForm">Thêm mới nhân
                    viên</button>
            </div>
            <div class="page__content">
                <EmployeeList :isShowDialog="isShowDialog"/>
                <div class="page__footer">
                    <div class="page__total-record">Tổng số:<b> 94</b> bản ghi</div>
                    <div class="page__pagingation">
                        <div class="combobox_paging combobox">
                            <input type="text" class="input">
                            <button>
                                <div class="m-arrow-dropdown"></div>
                            </button>
                            <div class="combobox__data-above" hidden>
                                <div class="combobox__item item-left" value="0">5 bản ghi trên 1 trang</div>
                                <div class="combobox__item item-left combobox__item-selected" value="1">10 bản ghi trên
                                    1 trang</div>
                                <div class="combobox__item item-left" value="2">15 bản ghi trên 1 trang</div>
                                <div class="combobox__item item-left" value="3">20 bản ghi trên 1 trang</div>
                            </div>
                        </div>
                        <div class="paging__group-button">
                            <button class="paging__button button-first" disabled>Trước</button>
                            <div class="button__number-group">
                                <button class="paging__number button__number-selected">1</button>
                                <button class="paging__number">2</button>
                                <button class="paging__number">...</button>
                                <button class="paging__number">4</button>
                                <button class="paging__number">5</button>
                            </div>
                            <button class="paging__button button-last">Sau</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmployeeList from '@/view/employees/EmployeeList.vue';
export default {
    components: { EmployeeList },
    methods: {
        btnOnClickForm() {
            this.isShowDialog = true
        }
    },
    data() {
        return {
            isShowDialog: false
        }
    }
}
</script>

<style>
@import url("../../css/layout/content.css");
</style>