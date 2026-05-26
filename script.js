// 1. 导航栏滚动特效（JS交互1）
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// 2. 图片点击放大（JS交互2 + Bootstrap模态框）
const viewBtns = document.querySelectorAll('.view-img');
const imgModal = new bootstrap.Modal(document.getElementById('imgModal'));
const modalImg = document.getElementById('modalImg');

viewBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const img = this.closest('.card').querySelector('img');
    modalImg.src = img.src;
    imgModal.show();
  });
});

// 3. 留言表单验证 + 动态渲染（JS交互3）
const msgForm = document.getElementById('msgForm');
const msgContainer = document.getElementById('msgContainer');

msgForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // 获取输入内容
  const name = document.getElementById('name').value.trim();
  const content = document.getElementById('content').value.trim();
  
  if (!name || !content) {
    alert('请填写完整信息！');
    return;
  }
  
  // 创建留言元素
  const msgItem = document.createElement('div');
  msgItem.className = 'msg-item p-3 bg-white rounded shadow-sm';
  msgItem.innerHTML = `
    <h6>${name}</h6>
    <p class="mb-0">${content}</p>
    <small class="text-muted">${new Date().toLocaleString()}</small>
  `;
  
  // 添加到页面
  msgContainer.prepend(msgItem);
  // 清空表单
  msgForm.reset();
  alert('留言成功！');
});