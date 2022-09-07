var common = {

    /**
     * Hiển thị cảnh báo
     * @param {Array} -  msgErrors Mảng các thông báo hiển thị
     * Author: Locdx 06/09/2022
     */
     showErrorDialog(msgErrors) {
        try {
            // Khai báo html của dialog:
            let dlgHTML = $(`<div id="dlgDialog1" class="dialog">
                                <div class="dialog__content">
                                    <div id="btnClose1" class="dialog__button--close"></div>
                                    <div class="dialog__header title">Thông báo</div>
                                    <div class="dialog__body">
                                       
                                    </div>
                                    <div class="dialog__footer">
                                        <button id="btnOk" class="button1">Đồng ý</button>
                                    </div>
                                </div>
                            </div>
                            `);
            // Đẩy nội dung từ mảng vào trong dlgHTML
            var dlgBody = dlgHTML.find(".dialog__body");
            // debugger
            // console.log(dlgBody);
            // console.log(dlgHTML);
            if(msgErrors) {
                for (const msgError of msgErrors) {
                    let textHTML = `<div>-${msgError}</div>`
                    dlgBody.append(textHTML);
                }
            }
            // Hiển thị dialog
            $('body').append(dlgHTML);
            
        } catch (error) {
            console.log(error);
        }
     },

    /**
     * Định dạng ngày tháng năm sinh
     * @param {any} -  ngày tháng
     * Author: Locdx 06/09/2022
     */
    formatDate(date) {
        try {
            if(date){
                date = new Date(date);
                // Lấy ra ngày , ngày < 10 sẽ có dạng 01,02,...
                let day = date.getDay();
                day = day < 10 ? `0${day}` : day;
                // Lấy ra tháng , tháng < 10 sẽ có dạng 01,02,...
                let month = date.getMonth() + 1;
                month = month < 10 ? `0${month}` : month;
                // Lấy ra năm
                let year = date.getYear();
                return `${day}/${month}/${year}`;
            } else {
                return " ";
            }

        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Định dạng tiền lương
     * @param {number} -  Tiền lươnh
     * Author: Locdx 06/09/2022
     */
     formatMoneyVND(money) {
        try {
            if(money){
                money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(money);
                return money;
            } else {
                return " ";
            }

        } catch (error) {
            console.log(error);
        }
    }
}

/**
* Gán sự kiện validate cho các input bắt buộc nhập
* Author: Locdx 06/09/2022
*/
$("input[empty-value]").blur(function () { 
    let value = $(this).val();
    if(!value) {
        $(this).addClass("input--error");
    } else {
        $(this).removeClass("input--error");
    }
    
});