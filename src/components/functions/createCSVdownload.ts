import type { DMA } from "../../interfaces/DMA.js"
import { type Ref } from "vue";

export function createCSVdownload(dmaDetails: Ref<DMA | undefined>, PSOSME: any) {
    console.log(PSOSME)
    // crate json with mapping
    const header = dmaDetails.value?.responses[0].data
    console.log(header);

    //transform date
    const inputDateString = new Date().toLocaleString();
    const parts = inputDateString.split(", ")[0].split(".");
    const inputDate = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");
    const year = inputDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    //function for 2 answers 1|1
    const questionCalc1 = (question: any, row: any) => {
        if (question) {
            let Column1 = false;
            let Column2 = false;
            if (question.hasOwnProperty(row)) {
                const rowData = question[row];
                if (rowData.hasOwnProperty("Column 1") && Array.isArray(rowData["Column 1"]) && rowData["Column 1"].includes("Yes")) {
                    Column1 = true;
                }
                if (rowData.hasOwnProperty("Column 2") && Array.isArray(rowData["Column 2"]) && rowData["Column 2"].includes("Yes")) {
                    Column2 = true;
                }
            }
            if (Column1 && Column2) {
                return '1|1';
            } else if (Column1 && !Column2) {
                return '1|0';
            } else if (!Column1 && Column2) {
                return '0|1';
            } else {
                return '0|0';
            }
        }
    }

    //function for readiogrop with 6 answers
    const questionCalc2 = (question: any, row: any) => {
        if (question.hasOwnProperty(row)) {
            const item = question[row]["Column 1"];
            switch (item) {
                case "Item 1":
                    return 0;
                case "Item 2":
                    return 2;
                case "Item 3":
                    return 4;
                case "Item 4":
                    return 6;
                case "Item 5":
                    return 8;
                case "Item 6":
                    return 10;
                default:
                    return 0;
            }
        } else {
            return 0;
        }
    };

    //function for readiogrop with 3 answers
    const questionCalc3 = (question: any, row: any) => {
        if (question.hasOwnProperty(row)) {
            const item = question[row];
            switch (item) {
                case "Column 1":
                    return 0;
                case "Column 2":
                    return 5;
                case "Column 3":
                    return 10;
                default:
                    return 0;
            }
        } else {
            return 0;
        }
    };
    let jsonData: any = {};
    if (PSOSME === "PSO") {
        jsonData = {
            time_point: dmaDetails.value?.euDMA,
            maturity_assessment_date: formattedDate,
            enterprise_name_edih: header.EUPSOQuestion2,
            fiscal_registration_number_vat: header.EUPSOQuestion3,
            //question EUPSOQuestion15
            digitalisation_needs_are_identified_m2_1_1: header.EUPSOQuestion15?.includes('Item 1') ? 1 : 0,
            financial_resources_m2_1_1: header.EUPSOQuestion15?.includes('Item 2') ? 1 : 0,
            ict_infrastructures_m2_1_1: header.EUPSOQuestion15?.includes('Item 3') ? 1 : 0,
            ict_specialists_m2_1_1: header.EUPSOQuestion15?.includes('Item 4') ? 1 : 0,
            political_commitment_m2_1_1: header.EUPSOQuestion15?.includes('Item 5') ? 1 : 0,
            organisational_units_m2_1_1: header.EUPSOQuestion15?.includes('Item 6') ? 1 : 0,
            internal_external_operational_processes_m2_1_1: header.EUPSOQuestion15?.includes('Item 7') ? 1 : 0,
            offline_services_m2_1_1: header.EUPSOQuestion15?.includes('Item 8') ? 1 : 0,
            citizens_and_other_stakeholders_m2_1_1: header.EUPSOQuestion15?.includes('Item 9') ? 1 : 0,
            risks_of_digitalisation_m2_1_1: header.EUPSOQuestion15?.includes('Item 10') ? 1 : 0,
            //question EUPSOQuestion16
            internal_operations_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 1'),
            external_operations_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 2'),
            policy_making_policy_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 3'),
            provision_of_public_services_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 4'),
            financial_administration_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 5'),
            human_resources_management_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 6'),
            purchasing_and_public_procurement_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 7'),
            project_planning_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 8'),
            //question EUPSOQuestion17
            connectivity_infrastructure_m2_2_3: header.EUPSOQuestion17?.includes('Item 1') ? 1 : 0,
            website_m2_2_3: header.EUPSOQuestion17?.includes('Item 2') ? 1 : 0,
            web_based_forms_and_blogs_m2_2_3: header.EUPSOQuestion17?.includes('Item 3') ? 1 : 0,
            live_chats_social_networks_m2_2_3: header.EUPSOQuestion17?.includes('Item 4') ? 1 : 0,
            remote_collaboration_tools_m2_2_3: header.EUPSOQuestion17?.includes('Item 5') ? 1 : 0,
            internal_web_portal_m2_2_3: header.EUPSOQuestion17?.includes('Item 6') ? 1 : 0,
            information_management_systems_m2_2_3: header.EUPSOQuestion17?.includes('Item 7') ? 1 : 0,
            tools_for_digital_public_services_m2_2_3: header.EUPSOQuestion17?.includes('Item 8') ? 1 : 0,
            public_procurement_tools_m2_2_3: header.EUPSOQuestion17?.includes('Item 9') ? 1 : 0,
            //question EUPSOQuestion18
            following_advanced_digital_technologies_m2_2_4__artificial_intelligence_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 1'),
            following_advanced_digital_technologies_m2_2_4__communication_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 2'),
            following_advanced_digital_technologies_m2_2_4__computing_infrastructures_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 3'),
            following_advanced_digital_technologies_m2_2_4__distributed_ledger_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 4'),
            following_advanced_digital_technologies_m2_2_4__digital_identity_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 5'),
            following_advanced_digital_technologies_m2_2_4__immersive_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 6'),
            following_advanced_digital_technologies_m2_2_4__internet_of_things_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 7'),
            following_advanced_digital_technologies_m2_2_4__software_service_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 8'),
            //question EUPSOQuestion19
            assesses_digital_skills_gaps_m2_3_5: header.EUPSOQuestion19?.includes('Item 1') ? 1 : 0,
            designs_a_training_plan_m2_3_5: header.EUPSOQuestion19?.includes('Item 2') ? 1 : 0,
            organises_short_trainings_m2_3_5: header.EUPSOQuestion19?.includes('Item 3') ? 1 : 0,
            facilitates_learning_m2_3_5: header.EUPSOQuestion19?.includes('Item 4') ? 1 : 0,
            offers_traineeships_m2_3_5: header.EUPSOQuestion19?.includes('Item 5') ? 1 : 0,
            sponsors_staff_participation_m2_3_5: header.EUPSOQuestion19?.includes('Item 6') ? 1 : 0,
            makes_use_of_subsidised_training_m2_3_5: header.EUPSOQuestion19?.includes('Item 7') ? 1 : 0,
            //question EUPSOQuestion20
            increases_staff_awareness_m2_3_6: header.EUPSOQuestion20?.includes('Item 1') ? 1 : 0,
            communicates_digitalisation_m2_3_6: header.EUPSOQuestion20?.includes('Item 2') ? 1 : 0,
            monitors_staff_acceptance_m2_3_6: header.EUPSOQuestion20?.includes('Item 3') ? 1 : 0,
            involves_staff_including_m2_3_6: header.EUPSOQuestion20?.includes('Item 4') ? 1 : 0,
            gives_staff_more_autonomy_m2_3_6: header.EUPSOQuestion20?.includes('Item 5') ? 1 : 0,
            redesigns_adapts_jobs_m2_3_6: header.EUPSOQuestion20?.includes('Item 6') ? 1 : 0,
            sets_up_more_flexible_working_m2_3_6: header.EUPSOQuestion20?.includes('Item 7') ? 1 : 0,
            puts_at_staff_disposal_m2_3_6: header.EUPSOQuestion20?.includes('Item 8') ? 1 : 0,
            puts_at_end_users_disposal_m2_3_6: header.EUPSOQuestion20?.includes('Item 9') ? 1 : 0,
            uses_feedback_m2_3_6: header.EUPSOQuestion20?.includes('Item 10') ? 1 : 0,
            //question EUPSOQuestion21
            the_organisation_has_in_place_m2_4_7: header.EUPSOQuestion21?.includes('Item 1') ? 1 : 0,
            not_used_paper_based_forms_m2_4_7: header.EUPSOQuestion21?.includes('Item 2') ? 1 : 0,
            data_are_stored_only_digitally_m2_4_7: header.EUPSOQuestion21?.includes('Item 3') ? 1 : 0,
            data_is_properly_integrated_m2_4_7: header.EUPSOQuestion21?.includes('Item 4') ? 1 : 0,
            data_is_accessible_m2_4_7: header.EUPSOQuestion21?.includes('Item 5') ? 1 : 0,
            collected_data_systematically_analysed_m2_4_7: header.EUPSOQuestion21?.includes('Item 6') ? 1 : 0,
            organisation_data_enriched_m2_4_7: header.EUPSOQuestion21?.includes('Item 7') ? 1 : 0,
            organisation_data_analytics_m2_4_7: header.EUPSOQuestion21?.includes('Item 8') ? 1 : 0,
            organisation_data_available_publicly_m2_4_7: header.EUPSOQuestion21?.includes('Item 9') ? 1 : 0,
            //question EUPSOQuestion22
            data_security_policy_m2_4_8: header.EUPSOQuestion22?.includes('Item 1') ? 1 : 0,
            established_plans_m2_4_8: header.EUPSOQuestion22?.includes('Item 2') ? 1 : 0,
            staff_is_regularly_informed_m2_4_8: header.EUPSOQuestion22?.includes('Item 3') ? 1 : 0,
            cyber_threats_egularly_monitored_m2_4_8: header.EUPSOQuestion22?.includes('Item 4') ? 1 : 0,
            full_backup_copy_of_critical_business_data_m2_4_8: header.EUPSOQuestion22?.includes('Item 5') ? 1 : 0,
            business_continuity_plan_m2_4_8: header.EUPSOQuestion22?.includes('Item 6') ? 1 : 0,
            //question EUPSOQuestion23
            publish_data_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 1'),
            ensure_level_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 2'),
            give_preference_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 3'),
            ensure_internal_visibility_m2_9_5: questionCalc1(header.EUPSOQuestion23, 'Row 4'),
            reuse_and_share_m2_9_5: questionCalc1(header.EUPSOQuestion23, 'Row 5'),
            impose_any_technology_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 6'),
            ensure_data_portability_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 7'),
            give_end_users_options_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 8'),
            provide_single_point_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 9'),
            ask_users_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 10'),
            persons_with_disabilities_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 11'),
            services_available_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 12'),
            ensure_data_exchange_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 13'),
            give_priority_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 14'),
            data_storage_formats_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 15'),
            digital_solutions_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 16'),
            //question EUPSOQuestion24
            sustainable_organisational_model_m2_6_10: header.EUPSOQuestion24?.includes('Item 1') ? 1 : 0,
            sustainable_service_provision_m2_6_10: header.EUPSOQuestion24?.includes('Item 2') ? 1 : 0,
            procurement_of_sustainable_products_m2_6_10: header.EUPSOQuestion24?.includes('Item 3') ? 1 : 0,
            emissions_pollution_m2_6_10: header.EUPSOQuestion24?.includes('Item 4') ? 1 : 0,
            sustainable_energy_generation_m2_6_10: header.EUPSOQuestion24?.includes('Item 5') ? 1 : 0,
            optimisation_of_energy_consumption_m2_6_10: header.EUPSOQuestion24?.includes('Item 6') ? 1 : 0,
            reduction_of_transport_and_packaging_costs_m2_6_10: header.EUPSOQuestion24?.includes('Item 7') ? 1 : 0,
            digital_applications_m2_6_10: header.EUPSOQuestion24?.includes('Item 8') ? 1 : 0,
            paperless_administrative_processes_m2_6_10: header.EUPSOQuestion24?.includes('Item 9') ? 1 : 0,
            //question EUPSOQuestion25
            green_digitalisation_2_likert__environmental_concerns_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 1'),
            green_digitalisation_2_likert__environmental_management_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 2'),
            green_digitalisation_2_likert__environmental_aspects_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 3'),
            green_digitalisation_2_likert__energy_consumption_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 4'),
            green_digitalisation_2_likert__recycling_reuse_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 5'),
        };
    }
    else if (PSOSME === "SME") {
        console.log("SME")
        jsonData = {
            time_point: dmaDetails.value?.euDMA,
            maturity_assessment_date: formattedDate,
            enterprise_name_edih: header.EUSMEQuestion2,
            fiscal_registration_number_vat: header.EUSMEQuestion3,
            //question EUSMEQuestion15 
            product_service_design_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 1'),
            project_planning_and_management_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 2'),
            operations_production_of_physical_goods_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 3'),
            collaboration_with_other_companies_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 4'),
            inbound_logistics_warehousing_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 5'),
            marketing_sales_customer_management_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 6'),
            delivery_outbound_logistics_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 7'),
            administration_and_human_resources_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 8'),
            purchasing_and_procurement_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 9'),
            cyber_security_m2_1_1: questionCalc1(header.EUSMEQuestion15, 'Row 10'),
            //question EUSMEQuestion16 
            digitalisation_needs_are_identified_m2_1_2: header.EUSMEQuestion16?.includes('Item 1') ? 1 : 0,
            financial_resources_m2_1_2: header.EUSMEQuestion16?.includes('Item 2') ? 1 : 0,
            it_infrastructures_m2_1_2: header.EUSMEQuestion16?.includes('Item 3') ? 1 : 0,
            ict_specialists_m2_1_2: header.EUSMEQuestion16?.includes('Item 4') ? 1 : 0,
            enterprise_s_management_m2_1_2: header.EUSMEQuestion16?.includes('Item 5') ? 1 : 0,
            concerned_business_departments_m2_1_2: header.EUSMEQuestion16?.includes('Item 6') ? 1 : 0,
            business_architecture_m2_1_2: header.EUSMEQuestion16?.includes('Item 7') ? 1 : 0,
            manufactured_products_m2_1_2: header.EUSMEQuestion16?.includes('Item 8') ? 1 : 0,
            clients_and_partners_satisfaction_m2_1_2: header.EUSMEQuestion16?.includes('Item 9') ? 1 : 0,
            risks_of_digitalisation_m2_1_2: header.EUSMEQuestion16?.includes('Item 10') ? 1 : 0,
            //question EUSMEQuestion17
            connectivity_infrastructure_m2_2_3: header.EUSMEQuestion17?.includes('Item 1') ? 1 : 0,
            enterprise_s_website_m2_2_3: header.EUSMEQuestion17?.includes('Item 2') ? 1 : 0,
            web_based_forms_and_blogs_m2_2_3: header.EUSMEQuestion17?.includes('Item 3') ? 1 : 0,
            live_chats_social_networks_m2_2_3: header.EUSMEQuestion17?.includes('Item 4') ? 1 : 0,
            e_commerce_sales_m2_2_3: header.EUSMEQuestion17?.includes('Item 5') ? 1 : 0,
            e_marketing_promotion_m2_2_3: header.EUSMEQuestion17?.includes('Item 6') ? 1 : 0,
            e_government_online_interaction_m2_2_3: header.EUSMEQuestion17?.includes('Item 7') ? 1 : 0,
            remote_business_collaboration_m2_2_3: header.EUSMEQuestion17?.includes('Item 8') ? 1 : 0,
            internal_web_portal_intranet_m2_2_3: header.EUSMEQuestion17?.includes('Item 9') ? 1 : 0,
            information_management_systems_m2_2_3: header.EUSMEQuestion17?.includes('Item 10') ? 1 : 0,
            //question EUSMEQuestion18
            following_advanced_digital_technologies_m2_2_4__simulation_and_digital_twins_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 1'),
            following_advanced_digital_technologies_m2_2_4__virtual_reality_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 2'),
            following_advanced_digital_technologies_m2_2_4__computer_aided_design_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 3'),
            following_advanced_digital_technologies_m2_2_4__manufacturing_execution_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 4'),
            following_advanced_digital_technologies_m2_2_4__internet_of_things_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 5'),
            following_advanced_digital_technologies_m2_2_4__blockchain_technology_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 6'),
            following_advanced_digital_technologies_m2_2_4__additive_manufacturing_m2_2_4: questionCalc2(header.EUSMEQuestion18, 'Row 7'),
            //question EUSMEQuestion19
            performs_staff_skill_m2_3_5: header.EUSMEQuestion19?.includes('Item 1') ? 1 : 0,
            designs_a_training_plan_m2_3_5: header.EUSMEQuestion19?.includes('Item 2') ? 1 : 0,
            organises_short_trainings_m2_3_5: header.EUSMEQuestion19?.includes('Item 3') ? 1 : 0,
            facilitates_learning_m2_3_5: header.EUSMEQuestion19?.includes('Item 4') ? 1 : 0,
            offers_traineeships_m2_3_5: header.EUSMEQuestion19?.includes('Item 5') ? 1 : 0,
            sponsors_staff_participation_m2_3_5: header.EUSMEQuestion19?.includes('Item 6') ? 1 : 0,
            makes_use_of_subsidised_training_m2_3_5: header.EUSMEQuestion19?.includes('Item 7') ? 1 : 0,
            //question EUSMEQuestion20
            facilitates_staff_awareness_m2_3_6: header.EUSMEQuestion20?.includes('Item 1') ? 1 : 0,
            communicates_digitalisation_m2_3_6: header.EUSMEQuestion20?.includes('Item 2') ? 1 : 0,
            monitors_staff_acceptance_m2_3_6: header.EUSMEQuestion20?.includes('Item 3') ? 1 : 0,
            involves_staff_including_m2_3_6: header.EUSMEQuestion20?.includes('Item 4') ? 1 : 0,
            gives_staff_more_autonomy_m2_3_6: header.EUSMEQuestion20?.includes('Item 5') ? 1 : 0,
            redesigns_adapts_jobs_m2_3_6: header.EUSMEQuestion20?.includes('Item 6') ? 1 : 0,
            sets_up_more_flexible_working_m2_3_6: header.EUSMEQuestion20?.includes('Item 7') ? 1 : 0,
            puts_at_staff_disposal_m2_3_6: header.EUSMEQuestion20?.includes('Item 8') ? 1 : 0,
            //question EUSMEQuestion21
            the_organisation_has_in_place_m2_4_7: header.EUSMEQuestion21?.includes('Item 1') ? 1 : 0,
            data_is_not_collected_digitally_m2_4_7: header.EUSMEQuestion21?.includes('Item 2') ? 1 : 0,
            relevant_data_m2_4_7: header.EUSMEQuestion21?.includes('Item 3') ? 1 : 0,
            data_is_properly_integrated_m2_4_7: header.EUSMEQuestion21?.includes('Item 4') ? 1 : 0,
            data_is_accessible_m2_4_7: header.EUSMEQuestion21?.includes('Item 5') ? 1 : 0,
            collected_data_m2_4_7: header.EUSMEQuestion21?.includes('Item 6') ? 1 : 0,
            data_analytics_enriched_m2_4_7: header.EUSMEQuestion21?.includes('Item 7') ? 1 : 0,
            data_analytics_accessible_m2_4_7: header.EUSMEQuestion21?.includes('Item 8') ? 1 : 0,
            //question EUSMEQuestion22
            enterprise_data_security_policy_m2_4_8: header.EUSMEQuestion22?.includes('Item 1') ? 1 : 0,
            all_client_related_data_m2_4_8: header.EUSMEQuestion22?.includes('Item 2') ? 1 : 0,
            staff_is_regularly_informed_m2_4_8: header.EUSMEQuestion22?.includes('Item 3') ? 1 : 0,
            cyber_threats_egularly_monitored_m2_4_8: header.EUSMEQuestion22?.includes('Item 4') ? 1 : 0,
            full_backup_copy_of_critical_business_data_m2_4_8: header.EUSMEQuestion22?.includes('Item 5') ? 1 : 0,
            business_continuity_plan_m2_4_8: header.EUSMEQuestion22?.includes('Item 6') ? 1 : 0,
            //question EUSMEQuestion23
            automation_and_artificial_intelligence_likert__natural_language_process_m2_5_9: questionCalc2(header.EUSMEQuestion23, 'Row 1'),
            automation_and_artificial_intelligence_likert__computer_vision_m2_5_9: questionCalc2(header.EUSMEQuestion23, 'Row 2'),
            automation_and_artificial_intelligence_likert__audio_processing_m2_5_9: questionCalc2(header.EUSMEQuestion23, 'Row 3'),
            automation_and_artificial_intelligence_likert__robotics_and_autonomous_devices_m2_5_9: questionCalc2(header.EUSMEQuestion23, 'Row 4'),
            automation_and_artificial_intelligence_likert__business_intelligence_m2_5_9: questionCalc2(header.EUSMEQuestion23, 'Row 5'),
            //question EUSMEQuestion24
            sustainable_business_model_m2_6_10: header.EUSMEQuestion24?.includes('Item 1') ? 1 : 0,
            sustainable_service_provision_m2_6_10: header.EUSMEQuestion24?.includes('Item 2') ? 1 : 0,
            sustainable_products_m2_6_10: header.EUSMEQuestion24?.includes('Item 3') ? 1 : 0,
            sustainable_production_m2_6_10: header.EUSMEQuestion24?.includes('Item 4') ? 1 : 0,
            emissions_pollution_m2_6_10: header.EUSMEQuestion24?.includes('Item 5') ? 1 : 0,
            sustainable_energy_generation_m2_6_10: header.EUSMEQuestion24?.includes('Item 6') ? 1 : 0,
            optimisation_of_raw_material_consumption_m2_6_10: header.EUSMEQuestion24?.includes('Item 7') ? 1 : 0,
            reduction_of_transport_and_packaging_costs_m2_6_10: header.EUSMEQuestion24?.includes('Item 8') ? 1 : 0,
            digital_applications_m2_6_10: header.EUSMEQuestion24?.includes('Item 9') ? 1 : 0,
            paperless_administrative_processes_m2_6_10: header.EUSMEQuestion24?.includes('Item 10') ? 1 : 0,

            //question EUSMEQuestion25
            green_digitalisation_2_likert__environmental_concerns_m2_6_11: questionCalc3(header.EUSMEQuestion25, 'Row 1'),
            green_digitalisation_2_likert__environmental_management_m2_6_11: questionCalc3(header.EUSMEQuestion25, 'Row 2'),
            green_digitalisation_2_likert__environmental_aspects_m2_6_11: questionCalc3(header.EUSMEQuestion25, 'Row 3'),
            green_digitalisation_2_likert__energy_consumption_m2_6_11: questionCalc3(header.EUSMEQuestion25, 'Row 4'),
            green_digitalisation_2_likert__recycling_reuse_m2_6_11: questionCalc3(header.EUSMEQuestion25, 'Row 5'),
        };
    }

    console.log(jsonData);
    // Generiere Header aus dem JSON
    const headers: string[] = Object.keys(jsonData);

    // Daten unter den Headern einfügen
    let csvContent = headers.join(",") + "\n";
    headers.forEach((header: string) => {
        // Korrekte Kodierung der Umlaute sicherstellen und einzelne Nullen behandeln
        const value = jsonData[header] !== null && jsonData[header] !== undefined ? jsonData[header].toString().replace(/"/g, '""') : "";
        csvContent += `"${value}",`;
    });
    csvContent = csvContent.slice(0, -1); // Letztes Komma entfernen
    csvContent += "\n";

    // CSV-Datei herunterladen
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri); // BOM-Zeichen hinzufügen
    link.setAttribute("download", `${PSOSME}EuDMAdata.csv`);
    document.body.appendChild(link);
    link.click();
}