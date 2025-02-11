"use strict";$(function(){var e,a=$(".dt-scrollableTable"),t=$(".dt-fixedheader"),s=$(".dt-fixedcolumns"),l=$(".dt-select-table");a.length&&a.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"age"},{data:"experience"},{data:""},{data:""}],columnDefs:[{targets:-2,render:function(e,t,a,s){var a=a.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return void 0===l[a]?e:'<span class="badge '+l[a].class+'">'+l[a].title+"</span>"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(e,t,a,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon item-edit"><i class="ti ti-pencil ti-md"></i></a>'}}],scrollY:"300px",scrollX:!0,dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-n6 mt-md-0"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',language:{paginate:{next:'<i class="ti ti-chevron-right ti-sm"></i>',previous:'<i class="ti ti-chevron-left ti-sm"></i>'}},initComplete:function(e,t){a.find("tbody tr:first").addClass("border-top-0"),$(".card-header").after('<hr class="my-0">')}}),t.length&&(t=t.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:""},{data:"id"},{data:"id"},{data:"full_name"},{data:"email"},{data:"start_date"},{data:"salary"},{data:"status"},{data:""}],columnDefs:[{className:"control",orderable:!1,targets:0,responsivePriority:3,render:function(e,t,a,s){return""}},{targets:1,orderable:!1,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},responsivePriority:4},{targets:2,visible:!1},{targets:3,render:function(e,t,a,s){var l=a.avatar,i=a.full_name,r=a.post;return'<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">'+(l?'<img src="'+assetsPath+"img/avatars/"+l+'" alt="Avatar" class="rounded-circle">':'<span class="avatar-initial rounded-circle bg-label-'+["success","danger","warning","info","primary","secondary"][Math.floor(6*Math.random())]+'">'+(l=(((l=(i=a.full_name).match(/\b\w/g)||[]).shift()||"")+(l.pop()||"")).toUpperCase())+"</span>")+'</div></div><div class="d-flex flex-column"><span class="emp_name text-truncate">'+i+'</span><small class="emp_post text-truncate text-muted">'+r+"</small></div></div>"},responsivePriority:5},{responsivePriority:1,targets:4},{responsivePriority:2,targets:6},{targets:-2,render:function(e,t,a,s){var a=a.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return void 0===l[a]?e:'<span class="badge '+l[a].class+'">'+l[a].title+"</span>"}},{targets:-1,title:"Actions",orderable:!1,render:function(e,t,a,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon item-edit"><i class="ti ti-pencil ti-md"></i></a>'}}],order:[[2,"desc"]],dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-n6 mt-md-0"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',displayLength:7,lengthMenu:[7,10,25,50,75,100],language:{paginate:{next:'<i class="ti ti-chevron-right ti-sm"></i>',previous:'<i class="ti ti-chevron-left ti-sm"></i>'}},responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().full_name}}),type:"column",renderer:function(e,t,a){a=$.map(a,function(e,t){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""}).join("");return!!a&&$('<table class="table"/><tbody />').append(a)}}}}),window.Helpers.isNavbarFixed()?(e=$("#layout-navbar").outerHeight(),new $.fn.dataTable.FixedHeader(t).headerOffset(e)):new $.fn.dataTable.FixedHeader(t)),s.length&&s.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"age"},{data:"experience"},{data:"status"},{data:"id"}],columnDefs:[{targets:-2,render:function(e,t,a,s){var a=a.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return void 0===l[a]?e:'<span class="badge '+l[a].class+'">'+l[a].title+"</span>"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(e,t,a,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record"></i>Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon item-edit"><i class="ti ti-pencil ti-md"></i></a>'}}],dom:'<"d-flex justify-content-between align-items-center row"<"col-sm-12 col-md-2 d-flex"f><"col-sm-12 col-md-10 d-none"i>>t',scrollY:300,scrollX:!0,scrollCollapse:!0,paging:!1,info:!1,fixedColumns:!0,initComplete:function(e,t){s.find("tbody tr:first").addClass("border-top-0")}}),l.length&&l.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:"id"},{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"status"}],columnDefs:[{targets:0,searchable:!1,orderable:!1,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectRow:!0,selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:-1,render:function(e,t,a,s){var a=a.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return void 0===l[a]?e:'<span class="badge '+l[a].class+'">'+l[a].title+"</span>"}}],order:[[1,"desc"]],dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',language:{paginate:{next:'<i class="ti ti-chevron-right ti-sm"></i>',previous:'<i class="ti ti-chevron-left ti-sm"></i>'}},select:{style:"multi"}}),setTimeout(()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")},200)});
