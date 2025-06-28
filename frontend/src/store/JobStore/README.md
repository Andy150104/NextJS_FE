# JobStore

JobStore là một Zustand store được sử dụng để quản lý state và gọi API cho các chức năng liên quan đến job.

## Cách sử dụng

### Import store
```typescript
import { useJobStore } from '../../store/JobStore/JobStore';
```

### Sử dụng trong component
```typescript
const { 
  jobs, 
  loading, 
  error, 
  totalJobs, 
  currentPage, 
  pageSize, 
  fetchJobs, 
  setCurrentPage 
} = useJobStore();
```

### Gọi API
```typescript
// Lấy danh sách jobs
await fetchJobs(token);

// Lấy chi tiết job
await fetchJobDetail(jobId, token);
```

## State

- `jobs`: Danh sách jobs từ API
- `jobDetail`: Chi tiết job hiện tại
- `loading`: Trạng thái loading
- `error`: Thông báo lỗi
- `totalJobs`: Tổng số jobs
- `currentPage`: Trang hiện tại
- `pageSize`: Số lượng jobs trên mỗi trang

## Actions

- `fetchJobs(token?)`: Lấy danh sách jobs
- `fetchJobDetail(id, token?)`: Lấy chi tiết job theo ID
- `setCurrentPage(page)`: Đặt trang hiện tại
- `setPageSize(size)`: Đặt số lượng jobs trên mỗi trang
- `clearError()`: Xóa thông báo lỗi
- `reset()`: Reset state về ban đầu

## API Endpoints

- `GET /api/v1/Job`: Lấy danh sách jobs
- `GET /api/v1/Job/{id}`: Lấy chi tiết job theo ID

## Lưu ý

- Store sử dụng swagger-typescript-api để generate types
- Cần truyền token để gọi API (nếu có)
- API base URL được cấu hình trong environment variable `NEXT_PUBLIC_API_BASE_URL` 