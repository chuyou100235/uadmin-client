<template>
  <div class="table-container">
    <byui-query-form>
      <byui-query-form-left-panel>
        <el-form
          ref="form"
          :model="queryForm"
          :inline="true"
          @submit.native.prevent
        >
          <el-form-item>
            <el-input v-model="queryForm.title" placeholder="标题" />
          </el-form-item>
          <el-form-item>
            <el-button
              icon="el-icon-search"
              type="primary"
              native-type="submit"
              @click="handleQuery"
              >查询
            </el-button>
          </el-form-item>
        </el-form>
      </byui-query-form-left-panel>
      <byui-query-form-right-panel>
        <el-button icon="el-icon-plus" type="primary" @click="handleAdd"
          >添加
        </el-button>
        <el-button icon="el-icon-delete" type="danger" @click="handleDelete"
          >删除
        </el-button>
      </byui-query-form-right-panel>
    </byui-query-form>

    <el-table
      ref="tableSort"
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
      @sort-change="tableSortChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="点击量" prop="pageViews" sortable>
      </el-table-column>
      <el-table-column label="作者" prop="author"></el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <el-image
            v-if="imgShow"
            :preview-src-list="imageList"
            :src="scope.row.img"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
        label="点击量"
        prop="pageViews"
        sortable
      ></el-table-column>
      <el-table-column class-name="status-col">
        <template slot-scope="scope">
          <el-tooltip
            :content="scope.row.status"
            class="item"
            effect="dark"
            placement="top-start"
          >
            <el-tag :type="scope.row.status | statusFilter"
              >{{ scope.row.status }}
            </el-tag>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="时间"
        prop="datetime"
        width="200"
      ></el-table-column>
      <el-table-column label="操作" width="180px" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="handleEdit(scope.row)"
            >编辑
          </el-button>
          <el-button type="text" @click="handleDelete(scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 start -->
    <el-pagination
      :background="background"
      :current-page="queryForm.pageNo"
      :layout="layout"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
    <!-- 分页 end -->
    <edit ref="edit"></edit>
  </div>
</template>

<script>
import { getList, doDelete } from "@/api/table";
import Edit from "./components/edit";
export default {
  name: "Table",
  components: {
    Edit,
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      // 请求参数
      queryForm: {
        pageNo: 1,
        pageSize: 20,
        title: "",
      },
      // 自定义请求
      initifyAPI: {
        url: "",
        method: "get",
        data: {},
      },
      // 加载状态
      listLoading: true,
      elementLoadingText: "正在加载...",
      // 自定义表格
      list: [],
      imgShow: true,
      imageList: [],
      // 选中行
      selectRows: "",
      // 分页
      total: 0,
      layout: "total, sizes, prev, pager, next, jumper",
      background: true,
    };
  },
  created() {
    //获取初始化数据
    var params = this.$route.meta;
    this.initifyAPI.url = params.api_url;
    this.initifyAPI.method = params.method;
    this.initifyAPI.data = params.parame;

    //API初始化
    this.initify();
  },
  beforeDestroy() {},
  mounted() {},
  methods: {
    // 数据初始化
    initify() {
      this.listLoading = true;
      getList(this.initifyAPI).then((res) => {
        let datalist = res.data;
        this.list = datalist.dataList;
        const imageList = [];
        this.list.forEach((item, index) => {
          imageList.push(item.img);
        });
        this.imageList = imageList;
        this.total = datalist.total;
        setTimeout(() => {
          this.listLoading = false;
        }, 500);
      });
    },
    // 数据排序
    tableSortChange() {
      const imageList = [];
      this.$refs.tableSort.tableData.forEach((item, index) => {
        imageList.push(item.img);
      });
      this.imageList = imageList;
    },
    // 选中行
    setSelectRows(val) {
      this.selectRows = val;
    },
    // 添加数据
    handleAdd() {
      this.$refs["edit"].showEdit();
    },
    // 编辑数据
    handleEdit(row) {
      this.$refs["edit"].showEdit(row);
    },
    // 删除数据
    handleDelete(row) {
      if (row.id) {
        this.$baseConfirm("你确定要删除当前项吗？", null, () => {
          doDelete({ ids: row.id }).then((res) => {
            this.$baseMessage(res.msg, "success");
            this.fetchData();
          });
        });
      } else {
        if (this.selectRows.length > 0) {
          const ids = this.selectRows.map((item) => item.id).join();
          this.$baseConfirm("你确定要删除选中项吗", null, () => {
            doDelete({ ids: ids }).then((res) => {
              this.$baseMessage(res.msg, "success");
              this.fetchData();
            });
          });
        } else {
          this.$baseMessage("未选中任何行", "error");
          return false;
        }
      }
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.queryForm.pageNo = val;
      this.fetchData();
    },
    handleQuery() {
      this.queryForm.pageNo = 1;
      this.fetchData();
    },
  },
};
</script>
