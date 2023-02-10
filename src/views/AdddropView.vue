<script setup>
import { useCourse,add_drop } from "../stores/CourseList.js";
const { list } = useCourse();
const { myCart, Drop } = add_drop();
</script>

<template>
    <div class="card shadow mb-4">
			<div class="card-header py-3">
				<h6 class="text-center  m-0 font-weight-bold text-primary">ตะกร้าของคุณ</h6>
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
										
										<v-btn icon color="gray" @click="Drop(n - 1)">
											<i class="bi bi-x-lg"></i>
										</v-btn>
									
									</td>
								</tr>
							</tbody>
						</table>

					</table>
				</div>
			</div>

		</div>

		<div>
			{{ myCart }}
		</div>
</template>
<style scoped>
    i{
        font-size: 20px;
        color: red;
    }
</style>
