import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourse = defineStore("list", () => {
  const list = ref([
                {
                    id: 1,
                    code: 'ศท180-1',
                    name: 'ศิลปะกับความคิดสร้างสรรค์',
                    credit:3,
                    info: ''
                    
                },
                {
                    id: 2,
                    code: 'สต301-1',
                    name: 'หลักสถิติ',
                    credit:3,
                    info: 'ทบทวนแนวคิดเกี่ยวกับสถิติพรรณนาและความน่าจะเป็น การแจกแจงความน่าจะเป็น การแจกแจงทวินาม การแจกแจงปรกติ การแจกแจงของกลุ่มตัวอย่าง การประมาณค่าและการทดสอบสมมุติฐานเกี่ยวกับค่าพารามิเตอร์ การวิเคราะห์ความแปรปรวน การวิเคราะห์ความถดถอยและสหสัมพันธ์อย่างง่าย'
                },
                {
                    id: 3,
                    code: 'ศท011-1',
                    credit:3,
                    name: 'มนุษย์กับความงามทางศิลปะ',
                    info: ''
                },
                {
                    id: 4,
                    code: 'ศท012-2',
                    credit:3,
                    name: 'จิตวิทยากับพฤติกรรมมนุษย์',
                    info: ''
                },
                {
                    id: 5,
                    code: 'ศท013-2',
                    credit:3,
                    name: 'สุขภาพเพื่อการดำรงชีวิต',
                    info: ''
                },
                {
                    id: 6,
                    code: 'ศท304-3',
                    credit:3,
                    name: 'ศาสตร์และศิลป์แห่งปัญญาชน',
                    info: ''
                },
                {
                    id: 7,
                    code: 'ศท305-2',
                    credit:3,
                    name: 'ประวัติศาสตร์และพัฒนาการของล้านนา',
                    info: ''
                },
                {
                    id: 8,
                    code: 'คพ252-1',
                    name: 'คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์',
                    credit:3,
                    info: 'ความรู้เบื้องต้นเกี่ยวกับเมตริกซ์ การดำเนินการของเมตริกซ์ การดำเนิน การตามแถวและหลัก รูปแบบแอชชิลอนของเมตริกซ์ ระบบสมการเชิงเส้น ดีเทอร์มิแนนท์ ปริภูมิเวกเตอร์ การโปรแกรมเชิงเส้น'
                },
                {
                    id: 9,
                    code: 'ศท242-4',
                    credit:3,
                    name: 'ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 2',
                    info: ''
                },
                {
                    id: 10,
                    code: 'คพ343',
                    credit:3,
                    name: 'การวิเคราะห์และออกแบบเชิงวัตถุ',
                    info: ''
                },
                {
                    id: 11,
                    code: 'คพ232-1',
                    name: 'สถาปัตยกรรมคอมพิวเตอร์',
                    credit:3,
                    info: ''
                }
            ]);

            return { list };
          });

export const add_drop = defineStore("myCart", () => {
  const myCart = ref([]);
  const Add = (code, name, credit) => {
    const Subject = {
        code: code,
        name: name,
        credit: credit,
    };
    if (Subject.code in myCart){
        
    }else{
        myCart.value.push(Subject);
    }
  };
  const Drop = (n) => {
    myCart.value.splice(n, 1);
  };
  return { myCart, Add, Drop };
})


