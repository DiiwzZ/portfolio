# Pujo Cat Hotel

เว็บไซต์ระบบจองห้องพักโรงแรมแมว Pujo Cat Hotel - โปรเจคสำหรับการศึกษา

## 📋 เกี่ยวกับโปรเจค

Pujo Cat Hotel เป็นเว็บไซต์สำหรับการจองห้องพักโรงแรมแมว พร้อมระบบชำระเงินและการแจ้งชำระเงิน ถูกพัฒนาขึ้นเพื่อใช้ในการศึกษา

## ✨ ฟีเจอร์

- 🏠 **หน้าแรก**: แสดงข้อมูลบริการและเงื่อนไขการเข้าพัก
- 📅 **ระบบจองห้องพัก**: 
  - เลือกวันที่เช็คอิน/เช็คเอาท์
  - ตรวจสอบการจอง
  - กรอกข้อมูลผู้จอง
- 💳 **ระบบชำระเงิน**: 
  - แสดงรายละเอียดการชำระเงิน
  - QR Code สำหรับสแกนชำระเงิน
- 📝 **แจ้งชำระเงิน**: อัปโหลดสลิปการโอนเงิน
- 📞 **ติดต่อเรา**: ข้อมูลการติดต่อและช่องทางสื่อสาร

## 🛠️ เทคโนโลยีที่ใช้

- **HTML5**: โครงสร้างหน้าเว็บ
- **CSS3**: 
  - Bootstrap 5.3.3 สำหรับ responsive design
  - Custom CSS สำหรับ styling
- **JavaScript**:
  - jQuery 3.6.0
  - jQuery UI 1.12.1 สำหรับ datepicker (รองรับภาษาไทย)
  - LocalStorage สำหรับเก็บข้อมูลการจอง
- **Bootstrap Icons**: ไอคอนสำหรับ UI

## 📁 โครงสร้างโปรเจค

```
HTML/
├── index.html          # หน้าแรก
├── booking.html        # หน้าจองห้องพัก (3 steps)
├── payment.html         # หน้ารายละเอียดการชำระเงิน
├── conpayment.html     # หน้าแจ้งชำระเงิน
├── contact.html        # หน้าติดต่อเรา
├── styles.css          # CSS หลัก
├── styles2.css         # CSS เพิ่มเติม
├── theme.js            # JavaScript สำหรับ theme (ถ้ามี)
├── images/             # รูปภาพ
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
└── README.md           # เอกสารนี้
```

## 🚀 วิธีใช้งาน

### Local Development

1. Clone repository:
```bash
git clone https://github.com/DiiwzZ/pujo-cat_hotel.git
cd pujo-cat_hotel
```

2. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์

3. หรือใช้ local server:
```bash
# ใช้ Python
python -m http.server 8000

# ใช้ Node.js (http-server)
npx http-server
```

### 🌐 Live Website

เว็บไซต์จะถูก deploy อัตโนมัติผ่าน GitHub Pages เมื่อ push code ขึ้น repository

**URL**: `https://diiwzz.github.io/pujo-cat_hotel/`

> หมายเหตุ: ต้องเปิดใช้งาน GitHub Pages ใน repository settings ก่อน

## 📱 Responsive Design

เว็บไซต์รองรับการแสดงผลบน:
- 💻 Desktop
- 📱 Mobile
- 📱 Tablet

## 🎨 Theme

- **สีหลัก**: ขาว-น้ำเงิน (White & Blue)
- **Typography**: Kanit, Sarabun (Google Fonts)

## 🔄 CI/CD

โปรเจคใช้ GitHub Actions สำหรับ automatic deployment:
- **Workflow**: `.github/workflows/deploy.yml`
- **Deploy**: อัตโนมัติเมื่อ push ไปยัง branch `main` หรือ `master`
- **Platform**: GitHub Pages

### วิธีตั้งค่า GitHub Pages

1. ไปที่ repository settings
2. ไปที่ **Pages** ในเมนูด้านซ้าย
3. ตั้งค่า **Source** เป็น **GitHub Actions**
4. Save

## 📝 หมายเหตุ

โปรเจคนี้จัดทำขึ้นเพื่อการศึกษาเท่านั้น

## 👥 ผู้พัฒนา

- จัดทำโดย: [ชื่อผู้พัฒนา]
- สำหรับ: โปรเจค Database (Year 2, Term 2)

## 📄 License

โปรเจคนี้จัดทำเพื่อการศึกษา

---

© 2024 Pujo Cat Hotel. จัดทำเพื่อการศึกษา.

