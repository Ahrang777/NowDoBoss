package com.ssafy.backend.domain.district.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
public record SalesDistrictMonthSalesTopFiveInfo(
        String serviceCode,
        String serviceCodeName,
        Long monthSales
) {
    public SalesDistrictMonthSalesTopFiveInfo(String serviceCode, String serviceCodeName, Long monthSales) {
        this.serviceCode = serviceCode;
        this.serviceCodeName = serviceCodeName;
        this.monthSales = monthSales;
    }
}
