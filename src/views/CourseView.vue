<script setup>
import { useCourse,add_drop } from "../stores/CourseList.js";
const { list } = useCourse();
const { myCart, Add} = add_drop();

</script>


<template>
	<div class="container-fluid">

		<!-- Page Heading -->
		<h1 class="h3 mb-2 text-gray-800">Course</h1>


		<p class="mb-4">รายวิชาที่ลงทะเบียนเรียน <a target="_blank" href="https://reg.mju.ac.th/">MJU REG</a>.</p>

		<div class="card shadow mb-4">
			<div class="card-header py-3">
				<h6 class="m-0 font-weight-bold text-primary">รายวิชาที่สามารถลงทะเบียน</h6>
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">

						<table cellspacing="0" rules="all" class="table table-bordered table-hover"
							id="ctl00_ContentPlaceHolder1_gv22" style="border-collapse:collapse;">
							<tbody>
								<tr>
									<td>รหัส</td>
									<td>รายวิชา</td>
									<td>หน่วยกิต</td>
								</tr>
								<tr v-for="n in list.length ">
									<td>
  										{{ list[n - 1].code }}
									</td>
									<td>
										{{ list[n - 1].name }}
									</td>
									<td>
										{{ list[n - 1].credit }}
									</td>
									<td class="text-center">
										<v-btn icon color="green" 
        								@click="Add(list[n - 1].code, list[n - 1].name, list[n - 1].credit); alert(); ">
										<i class="bi bi-cart-plus"></i>
										</v-btn>
									</td>
								</tr>
								
							</tbody>
						</table>

					</table>
				</div>
			</div>

		</div>
	</div>
	<div>

	
</div>

</template>

<script>
export default {
  methods: {
    alert: function() {
      alert( 'เพิ่มลงตะกร้าเรียนร้อย!!!' );

    }
  }
};
</script>