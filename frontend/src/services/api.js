import axios from "axios";

// replace the top of api.js
const BASE_URL = "/api";  // Vite proxy handles routing to Django;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.status, error.config?.url);
    return Promise.reject(error);
  }
);
// ── Core ──────────────────────────────────────────
export const getHeroSlides    = () => api.get("/core/hero/");
export const getSchoolStats   = () => api.get("/core/stats/");
export const getAboutSection  = () => api.get("/core/about/");
export const getPrincipal     = () => api.get("/core/principal/");
export const getWhyChooseUs   = () => api.get("/core/why-choose-us/");

// ── Notices ───────────────────────────────────────
export const getNotices       = (type) =>
  api.get("/notices/", { params: type ? { type } : {} });
export const getNoticeDetail  = (id)  => api.get(`/notices/${id}/`);

// ── Academics ─────────────────────────────────────
export const getPrograms      = ()    => api.get("/academics/programs/");
export const getProgramDetail = (id)  => api.get(`/academics/programs/${id}/`);
export const getFaculty       = (deptId) =>
  api.get("/academics/faculty/", { params: deptId ? { department: deptId } : {} });
export const getMethodology   = ()    => api.get("/academics/methodology/");

// ── Admissions ────────────────────────────────────
export const getAdmissionInfo  = ()   => api.get("/admissions/info/");
export const getScholarships   = ()   => api.get("/admissions/scholarships/");
export const submitEnquiry     = (data) => api.post("/admissions/enquiry/", data);

// ── Events ────────────────────────────────────────
export const getEvents         = (upcoming) =>
  api.get("/events/", { params: upcoming ? { upcoming: true } : {} });

// ── Gallery ───────────────────────────────────────
export const getGalleryAlbums  = ()   => api.get("/gallery/");
export const getGalleryAlbum   = (id) => api.get(`/gallery/${id}/`);

// ── Downloads ─────────────────────────────────────
export const getDownloadCategories = () => api.get("/downloads/categories/");
export const getDownloadFiles      = (categoryId) =>
  api.get("/downloads/files/", { params: categoryId ? { category: categoryId } : {} });

// ── Testimonials ──────────────────────────────────
export const getTestimonials   = (type) =>
  api.get("/testimonials/", { params: type ? { type } : {} });

// ── Contact ───────────────────────────────────────
export const getContactInfo    = ()   => api.get("/contact/info/");
export const submitContact     = (data) => api.post("/contact/submit/", data);