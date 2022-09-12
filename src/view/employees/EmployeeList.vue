<template>
    <div>
        <div class="page__group">
            <div class="page__toolbar">
                <input type="text" class="page__toolbar--input input input-placehoder__italic"
                    placeholder="Tìm theo mã, tên nhân viên">
                <button class="page__toolbar--reload"></button>
                <div>
                    <div class="input__icon-right"></div>
                </div>
            </div>
            <div class="page__table">
                <div class="table__content">
                    <table id="tbEmployeeList" class="table">
                        <thead>
                            <tr>
                                <th class="text__align--center no_padding" style="min-width: 40px;">
                                    <input type="checkbox">
                                </th>
                                <th class="text__align--left" style="min-width: 150px;">Mã nhân viên</th>
                                <th class="text__align--left" style="min-width: 250px;">Tên nhân viên</th>
                                <th class="text__align--left" style="min-width: 120px;">Giới tính</th>
                                <th class="text__align--center" format-date style="min-width: 120px;">Ngày sinh</th>
                                <th class="text__align--left" style="min-width: 200px;">Số CMND</th>
                                <th class="text__align--left" style="min-width: 250px;">Chức danh</th>
                                <th class="text__align--left" style="min-width: 250px;">Tên đơn vị</th>
                                <th class="text__align--left" style="min-width: 150px;">Số tài khoản</th>
                                <th class="text__align--left" style="min-width: 250px;">Tên ngân hàng</th>
                                <th class="text__align--left" style="min-width: 250px;">Chi nhánh TK ngân hàng</th>
                                <th class="text__align--center" prop-name="options" style="min-width: 120px;">Chức năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee in employees" :key="employee.EmployeeId">
                                <td>{{employee.EmployeeCode}}</td>
                                <td>{{employee.FullName}}</td>
                                <td>{{employee.DateOfBirth}}</td>
                                <td></td>
                                <td>{{employee.DepartmentCode}}</td>
                                <td></td>
                            </tr>
                            <!-- <tr class="row--selected">
                                                <td id="EmployeeCode"class="text__align--center no_padding" style="min-width: 40px;">
                                                    <input type="checkbox">
                                                </td>
                                                <td class="text__align--left" style="min-width: 150px;">001200</td>
                                                <td class="text__align--left" style="min-width: 250px;">Nguyễn Văn Vũ</td>
                                                <td class="text__align--left" style="min-width: 120px;">Nam</td>
                                                <td class="text__align--center" style="min-width: 120px;">01/01/1990</td>
                                                <td class="text__align--left" style="min-width: 200px;">001200066666</td>
                                                <td class="text__align--left" style="min-width: 250px;">Nhân viên</td>
                                                <td class="text__align--left" style="min-width: 250px;">Nhóm kiểm hàng</td>
                                                <td class="text__align--left" style="min-width: 150px;">Số tài khoản</td>
                                                <td class="text__align--left" style="min-width: 250px;">Tên ngân hàng</td>
                                                <td class="text__align--left" style="min-width: 250px;">Chi nhánh TK ngân hàng</td>
                                                <td class="text__align--center" style="min-width: 120px;">
                                                        <div class="group__title-combobox">
                                                            <div class="title">Sửa</div>
                                                            <div class="combobox">
                                                                <button class="m-icon"><div class="m-arrow-dropdown-blue"></div></button>
                                                                <div class="combobox__data-under" hidden>
                                                                    <div class="combobox__item" value="0">Nhân bản</div>
                                                                    <div class="combobox__item" value="1" id="btnDelEmp">Xóa</div>
                                                                    <div class="combobox__item"  value="2">Ngưng sử dụng</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </td>
                                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <EmployeeDetail :isShowDialog=isShowDialog @clicked-hideform="clickHideForm"/>
    </div>
</template>

<script>
import EmployeeDetail from "./EmployeeDetail.vue";
export default {
    name: "EmployeeList",
    created() {
        fetch("https://cukcuk.manhnv.net/api/v1/Employees", { methods: "GET" })
            .then(res => res.json())
            .then(data => {
                this.employees = data;
                console.log(this.employees);
            });
    },
    props: {
        isShowDialog: Boolean,
    },
    methods: {
        clickHideForm() {
        }
    },
    data() {
        return {
            employees: [],
        };
    },
    components: { EmployeeDetail }
}
</script>

<style>

</style>