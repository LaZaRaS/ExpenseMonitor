package com.expensemonitor.controller;

import com.expensemonitor.model.Expense;
import com.expensemonitor.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseService expenseService;

    @PostMapping
    public Expense createExpense(@RequestBody Expense expense, @RequestParam Long userId) {
        return expenseService.createExpense(expense,userId);
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/group/name/{groupName}")
    public List<Expense> getExpensesByGroupName(@PathVariable String groupName) {
        return expenseService.getExpensesByGroupName(groupName);
    }

    @GetMapping("/group/id/{groupId}")
    public List<Expense> getExpensesByGroup(@PathVariable Long groupId) {
        return expenseService.getExpensesByGroup(groupId);
    }

    @GetMapping("/user/{userId}")
    public List<Expense> getExpensesByUser(@PathVariable Long userId) {
        return expenseService.getExpensesByUser(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
    }
}
