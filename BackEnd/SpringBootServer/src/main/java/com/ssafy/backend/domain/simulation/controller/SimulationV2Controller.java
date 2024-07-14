package com.ssafy.backend.domain.simulation.controller;

import com.ssafy.backend.domain.simulation.dto.request.SimulationRequest;
import com.ssafy.backend.domain.simulation.dto.request.SimulationV2Request;
import com.ssafy.backend.domain.simulation.dto.response.SimulationResponse;
import com.ssafy.backend.domain.simulation.dto.response.SimulationV2Response;
import com.ssafy.backend.domain.simulation.service.SimulationService;
import com.ssafy.backend.global.common.dto.Message;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "창업 시뮬레이션", description = "창업 시뮬레이션 관련 API 입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v2/simulation")
public class SimulationV2Controller {
    private final SimulationService simulationService;

    @Operation(
            summary = "창업 시뮬레이션 결과 조회",
            description = "창업 시뮬레이션 결과를 조회하는 기능입니다."
    )
    @PostMapping
    public ResponseEntity<Message<SimulationV2Response>> simulation(@RequestBody SimulationV2Request request) {
        return ResponseEntity.ok().body(Message.success(simulationService.simulateV2(request)));
    }
}
