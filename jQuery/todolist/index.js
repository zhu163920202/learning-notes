$(function(){
  load();
  $('#title').on('keydown', function(event) {
    if(event.keyCode === 13) {
      if($(this).val === '') {
        alert('please input something need to be done')
      } else {
        var local = getData();
        local.push({title: $(this).val(), done: false});
        saveData(local);
        load()
        $(this).val("");
      }
    
    }
    
  })
  $("ol, ul").on("click", "a", function() {
    // alert(11);
    // 先获取本地存储
    var data = getDate();
    console.log(data);
    // 修改数据
    var index = $(this).attr("id");
    console.log(index);
    data.splice(index, 1);
    // 保存到本地存储
    saveDate(data);
    // 重新渲染页面
    load();
  });
  // 4. toDoList 正在进行和已完成选项操作
  $("ol, ul").on("click", "input", function() {
      // alert(11);
      // 先获取本地存储的数据
      var data = getDate();
      // 修改数据
      var index = $(this).siblings("a").attr("id");
      console.log(index);
      // data[?].done = ?
      data[index].done = $(this).prop("checked");
      console.log(data);
  
      // 保存到本地存储
      saveDate(data);
      // 重新渲染页面
      load();
  });
  function getData() {
    var data = localStorage.getItem('todolist');
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  function saveData(data) {
    localStorage.setItem('todolist', JSON.stringify(data));
  }
  function load() {
    var data = getData()
    $('ol, ul').empty();
    var todoCount = 0;
    var doneCount = 0;
    $.each(data, function(i, n) {
      if (n.done) {
        $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
        doneCount++;
      } else {
          $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
          todoCount++;
      }
      $("#todocount").text(todoCount);
      $("#donecount").text(doneCount);
    })
  }
})