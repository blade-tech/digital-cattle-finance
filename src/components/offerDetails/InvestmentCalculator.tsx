import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calculator } from 'lucide-react';

interface InvestmentCalculatorProps {
  poolDetails: {
    investment: {
      minInvestment: number;
      maxInvestment: number;
      targetReturn: number;
      termDuration: number;
    };
  };
}

const InvestmentCalculator = ({ poolDetails }: InvestmentCalculatorProps) => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [autoReinvest, setAutoReinvest] = useState(false);
  const [riskTolerance, setRiskTolerance] = useState('moderate');

  const handleInvestmentAmountChange = (value: number[]) => {
    setInvestmentAmount(value[0]);
  };

  const calculateReturns = () => {
    const monthlyReturn = (investmentAmount * (poolDetails.investment.targetReturn / 100)) / 12;
    const totalReturn = monthlyReturn * poolDetails.investment.termDuration;
    return {
      monthly: monthlyReturn,
      total: totalReturn,
      finalAmount: investmentAmount + totalReturn
    };
  };

  const returns = calculateReturns();

  return (
    <Card className="bg-white shadow-lg border-green-200">
      <CardHeader>
        <CardTitle className="text-lg text-gray-800 flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-green-600" />
          <span>Investment Calculator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Investment Amount: ${investmentAmount.toLocaleString()}
          </Label>
          <Slider
            value={[investmentAmount]}
            onValueChange={handleInvestmentAmountChange}
            max={poolDetails.investment.maxInvestment}
            min={poolDetails.investment.minInvestment}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>${poolDetails.investment.minInvestment.toLocaleString()}</span>
            <span>${poolDetails.investment.maxInvestment.toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-green-50 rounded-lg">
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly Return</span>
            <span className="font-semibold text-green-600">${returns.monthly.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Return</span>
            <span className="font-semibold text-green-600">${returns.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-semibold text-gray-800">Final Amount</span>
            <span className="font-bold text-green-600">${returns.finalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">Auto-reinvest returns</Label>
            <Switch checked={autoReinvest} onCheckedChange={setAutoReinvest} />
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">Risk Tolerance</Label>
            <Select value={riskTolerance} onValueChange={setRiskTolerance}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conservative">Conservative</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="aggressive">Aggressive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">
          Invest ${investmentAmount.toLocaleString()}
        </Button>
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;