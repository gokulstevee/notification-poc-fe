import CustomTable from "@components/CustomTable/CustomTable";
import TableLoading from "@components/Loading/TableLoading/TableLoading";
import NoDataTable from "@components/NoDataTable/NoDataTable";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";
import { TableColumn } from "react-data-table-component";
import { Tooltip } from "react-tooltip";
import { fireToastError } from "@utils/toaster";
import { api } from "@utils/apis";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "src/state/hooks";
import { setRefreshToPullUpdateList } from "src/state/reducers/post";

type PostListType = {
  id: string;
  content: string;
  createdBy: string;
  createdAt: string;
  likes: number;
};

const PostList = () => {
  const { refreshToPullUpdateList } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const [postList, setPostList] = useState<PostListType[]>([]);
  const [perPageSize, setPerPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);

  const fetchPostList = async (pageNumber: number, pageSize = perPageSize) => {
    try {
      setLoading(true);
      const response = await api.post.getAllPosts({ pageNumber, pageSize });
      setPostList(response.data?.posts || []);
      setTotalRows(response.data?.total || 0);
    } catch (error: any) {
      fireToastError(error?.response?.data?.message ?? "Couldn't fetch posts");
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (refreshToPullUpdateList) {
      fetchPostList(1);
      dispatch(setRefreshToPullUpdateList(false));
    }
  }, [refreshToPullUpdateList]);

  const handleLike = async (post: Partial<PostListType>) => {
    try {
      await api.post.postsLike({ postId: post.id || "" });
    } catch (error: any) {
      fireToastError(error?.response?.data?.message ?? "Something went wrong");

      console.log("Error: ", error);
    }
  };

  const columns: TableColumn<Partial<PostListType>>[] = useMemo(
    () => [
      {
        name: "S.No.",
        cell: (_, index: number) => (
          <div className="py-[0.8rem]">
            <p>{index + 1 + (currentPage - 1) * perPageSize}.</p>
          </div>
        ),
      },
      {
        name: "Content",
        width: "15rem",
        cell: (row) => (
          <p className="font-medium">
            {row?.content && row.content.length > 30
              ? row.content.slice(0, 30) + "..."
              : row?.content}
          </p>
        ),
      },
      {
        name: "Author",
        width: "10rem",
        cell: (row) => <p>{row?.createdBy}</p>,
      },
      {
        name: "Likes",
        cell: (row) => <p>{row?.likes}</p>,
      },
      {
        name: "Created At",
        width: "15rem",
        cell: (row) => (
          <p>
            {row?.createdAt
              ? moment(row.createdAt)
                  .format("Do MMM YYYY hh:mma")
                  .replace("am", "AM")
                  .replace("pm", "PM")
              : ""}
          </p>
        ),
      },
      {
        name: "Action",
        cell: (row) => (
          <div className="min-w-[5rem] flex flex-row items-center gap-1">
            <HandThumbUpIcon
              className="w-[1.05rem] cursor-pointer text-[#378fcd]"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Like"
              onClick={() => handleLike(row)}
            />
          </div>
        ),
      },
    ],
    [postList, currentPage, perPageSize]
  );

  const handlePageChange = (page: number) => {
    fetchPostList(page);
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (newPerPage: number, page: number) => {
    fetchPostList(page, newPerPage);
    setPerPageSize(newPerPage);
  };

  return (
    <>
      <div className="w-full flex items-center mb-2"></div>
      <div className="rounded-lg border-[#E3E8EF] border-[1px]">
        <CustomTable
          columns={columns}
          data={postList}
          progressPending={loading}
          pagination={true}
          paginationServer={true}
          paginationTotalRows={totalRows}
          paginationDefaultPage={currentPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
          handlePageChange={handlePageChange}
          loadingComponent={<TableLoading />}
          noDataComponent={<NoDataTable />}
        />
        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
};

export default PostList;
