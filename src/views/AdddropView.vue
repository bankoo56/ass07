<script setup>
import { useCourse,add_drop } from "../stores/array.js";
const { list } = useCourse();
const { myCart, Add, Drop } = add_drop();
</script>

<template>
    <div class="card shadow mb-4">
			<div class="card-header py-3">
				<h6 class="text-center  m-0 font-weight-bold text-primary">เพิ่มถอนรายวิชา</h6>
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">

						<table cellspacing="0" rules="all" class="table table-bordered table-hover"
							id="ctl00_ContentPlaceHolder1_gv22" style="border-collapse:collapse;">
							<tbody>
								<tr>
									<th scope="col">ลำดับ</th>
									<th scope="col">รายวิชา</th>
									<th scope="col">หน่วยกิต</th>
								</tr>
								<tr v-for="n in myCart.length">
									<td>
                                        {{ myCart[n - 1].code }}
									</td>
									<td>
									    {{ myCart[n - 1].name }}
									</td>
									<td>
										{{ myCart[n - 1].credit }}
									</td>
									<td class="text-center">
										
										<i class="shadow bi-x-circle-fill" @click="Drop(n - 1)"></i>
									
									</td>
								</tr>
							</tbody>
						</table>

					</table>
				</div>
			</div>

		</div>


</template>
<style scoped>
    i{
        font-size: 20px;
        color: red;
    }
</style>
