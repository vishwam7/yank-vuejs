<template>
	<div class="info-box">
		<div class="row mt-5">
			<Voltar route="/service-panel-detailing" />
			<div class="col-md-8 col-12">
				<div class="card card-custom Detailing p-7">
					<FlightTickets
						image="media/site-images/Detailing & Empty"
						link="Pesquisa de candidatos no Linkedin + Mensagem"
						paragraph="Você define o perfil da sua vaga, nosso robô dispara mensagem de convites para os candidatos. Opções de filtrar por região, área, sexo, idade e experiência."
						after="R$ 0,67 / Requisição"
						before="R$ 1,10"
						discount="20% OFF"
						category="Recursos Humanos"
					/>
					<div class="form-group Detailing_form ml-6">
						<label
							><span class="text-danger">*</span>Posição:</label
						>
						<input
							type="email"
							class="form-control form-control-solid"
							placeholder="Ex: Manager"
						/>
					</div>
					<div class="form-group Detailing_form ml-6">
						<label
							><span class="text-danger">*</span>Descrição:</label
						>
						<textarea
							class="form-control form-control-solid"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="About Vacancy: You will be responsible for leading multidisciplinary teams. ______________
                                             Requirements:
                                             - Good communication
                                             - Management and creation of metrics"
						></textarea>
					</div>
					<div class="form-group Detailing_form ml-6">
						<label>Local:</label>
						<input
							type="email"
							class="form-control form-control-solid"
							placeholder="Ex: São Paulo, SP, Brazil"
						/>
					</div>
				</div>
				<RobotDocumentation>
					<div class="form-group Detailing_form ml-6">
						<label
							><span class="text-danger">*</span>Posição:</label
						>
						<input
							type="email"
							class="form-control form-control-solid"
							placeholder="Ex: Manager"
						/>
					</div>
					<div class="form-group Detailing_form ml-6">
						<label
							><span class="text-danger">*</span>Descrição:</label
						>
						<textarea
							class="form-control form-control-solid"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="About Vacancy: You will be responsible for leading multidisciplinary teams. ______________
                                             Requirements:
                                             - Good communication
                                             - Management and creation of metrics"
						></textarea>
					</div>
					<div class="form-group Detailing_form ml-6">
						<label>Local:</label>
						<input
							type="email"
							class="form-control form-control-solid"
							placeholder="Ex: São Paulo, SP, Brazil"
						/>
					</div>
				</RobotDocumentation>
			</div>
			<div class="col-md-4 col-12">
				<ConsumptionSimulator />
				<EmptyRobotActivate />
			</div>
		</div>
	</div>
</template>

<script>
import FlightTickets from "@/common/components/FlightTickets";
import TestForm from "@/common/components/TestForm";
import RobotDocumentation from "@/common/components/RobotDocumentation";
import ConsumptionSimulator from "@/common/components/ConsumptionSimulator";
import EmptyRobotActivate from "@/common/components/EmptyRobotActivate";
import Voltar from "@/common/components/layout/Voltar";
export default {
	components: {
		FlightTickets,
		TestForm,
		RobotDocumentation,
		ConsumptionSimulator,
		EmptyRobotActivate,
		Voltar,
	},
};
</script>

<style></style>
